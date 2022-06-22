import Head from 'next/head'
import React from 'react'
import Educational from '../../components/Demos/education/Educational';

export default function Education()
{
    return(
        <>
            <Head>
                <title>Education Page</title>
            </Head>
            <div>
                <Educational/>
            </div>
        </>
    )
}