import { FaFacebook } from "react-icons/fa";

export default function FbBtn(){

    return (
        <button 
            className=' w-full flex gap-2 items-center justify-center bg-[#1877F2] py-1 rounded-lg font-semibold'
        >
            <FaFacebook />
            <p>Facebook</p>
        </button>
    )
}