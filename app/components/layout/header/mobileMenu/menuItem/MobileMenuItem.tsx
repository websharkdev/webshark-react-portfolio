import { Button, Typography } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'

import { IMobileMenuItem } from '@/components/layout/header/mobileMenu/menuItem/mobileMenuItem.interface'

import styles from './mobileMenuItem.module.scss'

const MobileMenuItem: FC<IMobileMenuItem> = ({ title, link }) => (
  <Link href={link}>
    <a>
      <Button className={styles.button} variant="contained" color="info" size="large" fullWidth>
        <Typography variant="h6">{title}</Typography>
      </Button>
    </a>
  </Link>
)

export default MobileMenuItem
