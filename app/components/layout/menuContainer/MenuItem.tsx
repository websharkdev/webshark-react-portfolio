import { Link as MuiLink, styled } from '@mui/material'
import Link from 'next/link'
import { FC } from 'react'

import { IMenuItem } from '@/components/layout/menuContainer/menu.interface'

const StyledMuiLink = styled(MuiLink)(() => ({
  fontSize: 15,
}))

const MenuItem: FC<IMenuItem> = ({ title, link }) => (
  <Link href={link}>
    <StyledMuiLink>{title}</StyledMuiLink>
  </Link>
)

export default MenuItem
