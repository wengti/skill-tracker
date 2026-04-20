'use client'

import { useState } from "react";
import { Combobox, ComboboxContent, ComboboxEmpty, ComboboxInput, ComboboxInputWrapper, ComboboxItem, ComboboxLabel, ComboboxList, ComboboxTrigger } from "../tailgrids/core/combobox";
import { AllSkillsType } from "./RecordServerComponent";
import type { Key } from "react-aria-components";

export default function RecordClientComponent({ allSkills }: { allSkills: AllSkillsType[] }) {

    const [selectedSkillId, setSelectedSkillId] = useState<Key | null>(null)

    return (
        <div className="w-full max-w-xs">
            
            <Combobox 
                isRequired
                value={selectedSkillId}
                onChange={setSelectedSkillId}
            >
                <ComboboxLabel>Select a skill to practice</ComboboxLabel>
                <ComboboxInputWrapper>
                    <ComboboxInput 
                        placeholder="Select a skill"
                    />
                    <ComboboxTrigger />
                </ComboboxInputWrapper>
                <ComboboxContent>
                    <ComboboxList>
                        {
                            allSkills.map( (skillObj) => {
                                return (
                                    <ComboboxItem
                                        key={skillObj.id}
                                        id={skillObj.id}
                                    >
                                        {skillObj.skill[0].toUpperCase() + skillObj.skill.slice(1)}
                                    </ComboboxItem>
                                )
                            })
                        }
                    </ComboboxList>
                    <ComboboxEmpty>No results found</ComboboxEmpty>
                </ComboboxContent>
            </Combobox>
        </div>
    )
}