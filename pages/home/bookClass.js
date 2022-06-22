import Head from "next/head"
import ClassBook from "../../components/Demos/bookClass/ClassBook"
export default function bookClass()
{
    return(
        <>
        <Head>
            <title>Book a Class</title>
            
        </Head>
        <div>
           <ClassBook/>
        </div>
        </>
    )
}