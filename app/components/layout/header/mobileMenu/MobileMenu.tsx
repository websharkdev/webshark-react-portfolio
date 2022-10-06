import { SwipeableDrawer } from '@mui/material'
import { FC } from 'react'

import MobileMenuItem from '@/components/layout/header/mobileMenu/menuItem/MobileMenuItem'
import { IMobileMenu } from '@/components/layout/header/mobileMenu/mobileMenu.interface'
import menu from '@/components/layout/menuContainer/menu.data'

import styles from './mobileMenu.module.scss'

const MobileMenu: FC<IMobileMenu> = ({ isOpen, handleClose }) => (
  <SwipeableDrawer
    anchor="top"
    open={isOpen}
    onClose={() => handleClose(false)}
    onOpen={() => handleClose(true)}
    PaperProps={{
      className: styles.drawer,
    }}
    onClick={() => handleClose(false)}
  >
    <div className={styles.drawerContainer}>
      <div className={styles.linksContainer}>
        {menu.items.map((item) => (
          <MobileMenuItem key={item.link} {...item} />
        ))}
      </div>
    </div>
  </SwipeableDrawer>
)

export default MobileMenu
