import Head from 'next/head'
import React from 'react'
import Acadm from '../../components/Demos/academy/Acadm';

export default function Academy()
{
    return(
        <>
        <Head>
            <title>Academy Page</title>
        </Head>
        <div>
            <Acadm/>
        </div>
        </>
    )
}