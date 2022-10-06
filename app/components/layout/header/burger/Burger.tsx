import { IconButton } from '@mui/material'
import { FC } from 'react'

import { IBurger } from '@/components/layout/header/burger/burger.interface'

import ClosedBurger from '@/assets/icons/ui/burger_closed.svg'
import OpenedBurger from '@/assets/icons/ui/burger_opened.svg'

import styles from './burger.module.scss'

const Burger: FC<IBurger> = ({ isOpen, handleClick }) => (
  <IconButton className={styles.burger} onClick={() => handleClick(!isOpen)} size="medium">
    <div className={styles.burgerIcon}>{isOpen ? <OpenedBurger /> : <ClosedBurger />}</div>
  </IconButton>
)

export default Burger
