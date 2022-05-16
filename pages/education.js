import Head from 'next/head'
import React from 'react'

export default function Education()
{
    const EducationLazy = React.lazy(()=>import('../components/Demos/education/Educational'));
    return(
        <>
            <Head>
                <title>Education Page</title>
            </Head>
            <div>
                <React.Suspense fallback="Loading ....">
                    <EducationLazy/>
                </React.Suspense>
            </div>
        </>
    )
}