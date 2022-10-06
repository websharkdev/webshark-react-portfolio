import type { AppProps } from 'next/app'
import { Fragment } from 'react'

import MaineProvider from '@/providers/MaineProvider'

import styles from '@/styles/globals.sass'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Fragment>
    <MaineProvider>
      <Component {...pageProps} className={styles.Root} />
    </MaineProvider>
  </Fragment>
)

export default MyApp
