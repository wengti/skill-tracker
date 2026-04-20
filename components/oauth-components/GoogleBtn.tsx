import { FcGoogle } from "react-icons/fc";

export default function GoogleBtn(){

    return (
        <button 
            className='w-full flex gap-2 items-center justify-center bg-white py-1 rounded-lg font-semibold text-letter-black'
        >
            <FcGoogle />
            <p>Google</p>
        </button>
    )
}