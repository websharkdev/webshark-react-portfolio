import { FC } from 'react'

import MenuItem from '@/components/layout/menuContainer/MenuItem'
import { IMenu } from '@/components/layout/menuContainer/menu.interface'

import styles from './menuContainer.module.scss'

const MenuContainer: FC<{ menu: IMenu }> = ({ menu: { items } }) => (
  <nav className={styles.menuContainer}>
    {items.map((item) => (
      <MenuItem key={item.link} title={item.title} link={item.link} />
    ))}
  </nav>
)

export default MenuContainer
