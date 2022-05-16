import Head from 'next/head'
import React from 'react'

export default function Academy()
{
    const AcademyLazy = React.lazy(()=>import('../components/Demos/academy/Acadm'));
    return(
        <>
        <Head>
            <title>Academy Page</title>
        </Head>
        <div>
            <React.Suspense>
                <AcademyLazy/>
            </React.Suspense>
        </div>
        </>
    )
}