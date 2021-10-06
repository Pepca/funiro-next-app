import Head from 'next/head'
import React, {ReactNode} from 'react'

type TLayoutsProps = {
  children: ReactNode
}

const MainLayout = ({children}: TLayoutsProps) => {
  return (
    <>
      <Head>
        <meta
          name='keywords'
          content='Funiro app, funiroApp, Next, React, Next with React, React with Next, Internet-shop, SSR, SPA'
        />
        <meta name='description' content='Funiro internet-shop using Next framework!' />
        <title>Funiro app</title>
      </Head>
      {children}
    </>
  )
}

export default MainLayout
