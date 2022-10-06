import { FC, useState } from 'react'

import MobileMenu from '@/components/layout/header/mobileMenu/MobileMenu'
import Logo from '@/components/layout/logo/Logo'
import MenuContainer from '@/components/layout/menuContainer/MenuContainer'
import menu from '@/components/layout/menuContainer/menu.data'

import styles from './header.module.scss'

const Header: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const handleBurgerClick = (isOpen: boolean) => {
    setIsDrawerOpen(isOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.logoMenu}>
        <div className={styles.logoMenuContainer}>
          <Logo />
        </div>
        <MenuContainer menu={menu} />
      </div>
      <MobileMenu isOpen={isDrawerOpen} handleClose={handleBurgerClick} />
    </header>
  )
}

export default Header
