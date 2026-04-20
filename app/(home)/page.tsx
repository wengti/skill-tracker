import Greeting from "@/components/home/Greeting";
import NewSkill from "@/components/home/NewSkill";
import RecordServerComponent from "@/components/home/RecordServerComponent";


export default async function Home() {

    

    return (
        <>
            <Greeting />
            <NewSkill />
            <RecordServerComponent />
        </>
    )
}
