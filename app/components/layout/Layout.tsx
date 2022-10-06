import React, { FC, ReactElement } from 'react'

import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'

import styles from './layout.module.scss'

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.page}> {children}</div>
      <Footer />
    </div>
  )
}

export default Layout
