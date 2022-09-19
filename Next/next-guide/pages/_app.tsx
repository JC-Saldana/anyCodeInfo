import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

type NextPageWithLayout = NextPage & {
  getLayout ?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Makes it so that it's optional to use a layout
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    getLayout(<Component {...pageProps} />)
  )
}

export default MyApp
