import { Box, Divider, Grid, Typography, styled } from '@mui/material'
import Link from 'next/link'
import { FC, useContext, useEffect, useState } from 'react'
import { MenuItemProps } from 'shared/types/home'

import { home_dataEN, home_dataRU } from '@/components/screens/Home/data'

import { UserLanguageContext } from '../Layout'

import styles from './header.module.sass'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',
  marginBottom: theme.spacing(2),
}))

const Wrapper = styled(Box)(({ theme }) => ({
  width: 'calc(100% - 68px)',
  margin: '0 auto',
  padding: '34px 0',
  background: theme.palette.background.default,
}))

export const Header: FC<Props> = () => {
  const languageProps = useContext(UserLanguageContext)
  const [data, setData] = useState(home_dataEN)

  useEffect(() => {
    switch (languageProps.language) {
      case 'en':
        setData(home_dataEN)
        break
      case 'ru':
        setData(home_dataRU)
        break

      default:
        break
    }
  }, [languageProps.language])

  const { menu, fio } = data

  return (
    <Wrapper>
      <Root container>
        {menu.map((item: MenuItemProps) => (
          <Grid item xs={1} key={item.id} className={`header-menu--item ${styles.headerMenuItem}`}>
            <Link href={item.link}>{`${item.title}.`}</Link>
          </Grid>
        ))}
        <Grid item flex={1}>
          <Typography variant="h5" align="right">
            {fio}
          </Typography>
        </Grid>
      </Root>
      <Divider light />
    </Wrapper>
  )
}
