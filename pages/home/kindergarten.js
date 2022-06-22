import Head from "next/head"
import Kinder from "../../components/Demos/Kindergarten/Kinder"
export default function kindergarten()
{
    return(
        <>
        <Head>
            <title>Kindergarten Page</title>
            
        </Head>
        <div>
            <Kinder/>
        </div>
        </>
    )
}