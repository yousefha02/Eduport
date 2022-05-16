import Head from 'next/head'
import Univ from '../components/Demos/university/Univ'
export default function University()
{
    return(
        <>
        <Head>
            <title>University Page</title>
        </Head>
        <div>
            <Univ/>
        </div>
        </>
    )
}