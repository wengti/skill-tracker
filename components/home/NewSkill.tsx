'use client'

import { useContext, useState } from "react"
import { Dialog, DialogBody, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from "../tailgrids/core/dialog"
import { FaCirclePlus } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { buttonStyles } from "../tailgrids/core/button"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../tailgrids/core/input-group";
import { UserContext } from "@/context/UserContextClientComponent";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";



export default function NewSkill() {

    const [skill, setSkill] = useState<string>('')
    const [timeTarget, setTimeTarget] = useState<number>(0)
    const [status, setStatus] = useState<{type: 'success' | 'error' | null, message: string | null}>({type: null, message: null})
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id: currentUserId } = useContext(UserContext)
    const router = useRouter()

    const triggerCls = 'bg-icon-green px-4 py-2 rounded-lg font-semibold interactive-btn flex gap-2 items-center disabled:opacity-50'
    const statusMsgCls = status.type === 'error' ? 'text-red-500' : 'text-icon-green'

    async function handleAddSkill() {
        try {
            setStatus({type: null, message: null})
            setIsLoading(true)
            if(skill.length > 20) throw new Error('Maximum number of character in the skill name is 20.')
            if(timeTarget > 10080 || timeTarget <= 0) throw new Error ('Weekly target is out of the range of 1 - 10080 minutes.')
            
            const supabase = createClient()
            const { error } = await supabase
                .from('skills')
                .insert({user_id: currentUserId, weekly_target: timeTarget, skill: skill.toLowerCase().trim()})
            if (error) throw new Error(error.message)
            
            setSkill('')
            setTimeTarget(0)
            setIsLoading(false)
            setStatus({type: 'success', message: 'A new skill has been added.'})
            router.refresh()
        }
        catch (error) {
            setIsLoading(false)
            if (error instanceof Error) setStatus({type: 'error', message: error.message})
            else setStatus({type: 'error', message: 'An unknown error has occured.'})
        }
    }

    return (
        <div className='mx-auto'>
            <Dialog>
                <DialogTrigger
                    className={triggerCls}
                >
                    <FaCirclePlus />
                    <p>New Skill</p>
                </DialogTrigger>
                <DialogOverlay>
                    <DialogContent className="w-sm bg-card-white dark:bg-card-black">
                        <DialogHeader>
                            <DialogTitle className='text-letter-black dark:text-letter-white'>Add a new skill</DialogTitle>
                        </DialogHeader>
                        <DialogBody className='flex flex-col gap-2'>

                            <div>
                                <label className="text-sm font-medium text-letter-black dark:text-letter-white">
                                    Skill Name
                                </label>
                                <InputGroup>
                                    <InputGroupAddon align="inline-start">
                                        <FaCirclePlus className='text-letter-black dark:text-letter-white' />
                                    </InputGroupAddon>
                                    <InputGroupInput
                                        id='skill'
                                        name='skill'
                                        type='text'
                                        placeholder="i.e. Guitar"
                                        value={skill}
                                        onChange={(event) => setSkill(event.target.value)}
                                        className='text-letter-black dark:text-letter-white'
                                        disabled={isLoading}
                                        maxLength={20}
                                    />
                                </InputGroup>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-letter-black dark:text-letter-white">
                                    Weekly target (mins)
                                </label>
                                <InputGroup>
                                    <InputGroupAddon align="inline-start">
                                        <FaClock className='text-letter-black dark:text-letter-white' />
                                    </InputGroupAddon>
                                    <InputGroupInput
                                        id='timeTarget'
                                        name='timeTarget'
                                        type='number'
                                        value={timeTarget}
                                        onChange={(event) => setTimeTarget(Number(event.target.value))}
                                        className='text-letter-black dark:text-letter-white [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'
                                        disabled={isLoading}
                                    />
                                </InputGroup>
                            </div>
                        </DialogBody>
                        <DialogFooter>
                            <button
                                className={`${buttonStyles({ size: "sm" })} bg-icon-green interactive-btn`}
                                onClick={() => handleAddSkill()}
                                disabled={isLoading}
                            >
                                Add
                            </button>
                        </DialogFooter>
                        {
                            status.type && 
                            <p className={`text-sm text-left mt-2 ${statusMsgCls}`}>
                                {status.message}
                            </p>
                        }
                    </DialogContent>
                </DialogOverlay>
            </Dialog>
        </div >
    )
}

