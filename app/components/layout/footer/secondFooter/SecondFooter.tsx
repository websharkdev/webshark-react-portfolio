import { FC } from 'react'

import Subscribe from '@/components/layout/footer/secondFooter/subscribe/Subscribe'

import styles from './secondFooter.module.scss'

const SecondFooter: FC = () => (
  <div className={styles.secondFooterContainer}>
    <Subscribe />
  </div>
)

export default SecondFooter
