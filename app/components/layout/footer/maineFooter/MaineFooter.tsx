import { Link as MuiLink } from '@mui/material'
import { FC } from 'react'

import footerLinks from '@/components/layout/footer/maineFooter/footerLinks.data'
import Logo from '@/components/layout/logo/Logo'
// import Logo from '@/components/layout/logo/Logo'
import MenuContainer from '@/components/layout/menuContainer/MenuContainer'
import menu from '@/components/layout/menuContainer/menu.data'

import { toDay } from '@/config/constants'

import styles from './maineFooter.module.scss'

const MaineFooter: FC = () => {
  const currentYear = toDay.getFullYear()
  return (
    <div className={styles.maineFooter}>
      <div className={styles.linksContainer}>
        <div className={styles.maineFooterLogo}>
          <Logo />
        </div>
        <MenuContainer menu={menu} />
      </div>
      <div className={styles.termsContainer}>
        <p className={styles.copyright}>©{currentYear} copyright Webshark.dev</p>
        <div className={styles.termsLinks}>
          {footerLinks.map((item) => (
            <MuiLink href={item.href} key={item.href} target="_blank" rel="noopener">
              {item.title}
            </MuiLink>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MaineFooter
