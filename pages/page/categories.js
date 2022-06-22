import Head from 'next/head'
import Categ from '../../components/page/Categ/Categ'

export default function Categories()
{
    return(
        <>
        <Head>
            <title>Categories Page</title>
        </Head>
        <div>
            <Categ/>
        </div>
        </>
    )
}