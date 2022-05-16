import Head from 'next/head'
import React from 'react'

export default function Home() {
  const DemosLazy = React.lazy(()=>import('../components/Demos/Default/Demos'));
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
    <React.Suspense fallback="Loading ....">
      <DemosLazy/>
    </React.Suspense>
    </>
  )
}
