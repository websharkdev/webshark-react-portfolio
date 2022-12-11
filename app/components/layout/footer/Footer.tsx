import { Box, Grid, Typography, styled } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useContext, useEffect, useState } from 'react'
import { MenuItemProps } from 'shared/types/home'

import { home_data, home_dataEN, home_dataRU } from '@/components/screens/Home/data'

import { GitHubIcon, InstagramIcon, TelegramIcon, buyMeACoffeQR } from '@/assets/icons/ui'

import { UserLanguageContext } from '../Layout'
import { SocialMedia } from '../SocialMedia'
import styles from '../layout.module.sass'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  flexWrap: 'nowrap',
  minHeight: 490,
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
  },
  '& .footer-leftSide': {
    display: 'flex',
    alignItems: 'flex-end',
    background: '#DBFF5D',
    padding: `${theme.spacing(11)} ${theme.spacing(5)} ${theme.spacing(4)} ${theme.spacing(5)}`,
    '& .footer-leftSide--divider': {
      marginTop: 20,
      height: 2,
      width: 39,
      background: '#B8B8FF',
    },
    '& .footer-leftSide--createdWithLove': {
      width: '100%',
      '& span': {
        color: '#f00',
      },
    },
  },
  '& .footer-rightSide': {
    background: '#240046',
    display: 'flex',
    alignItems: 'flex-end',
    padding: `${theme.spacing(11)} ${theme.spacing(5)} ${theme.spacing(4)} ${theme.spacing(5)}`,
    '& .footer-rightSide--divider': {
      marginBottom: 20,
      height: 2,
      width: 39,
      background: '#B8B8FF',
    },
    '& .footer-rightSide--link': {
      color: '#DEE2E6',
      textDecoration: 'none',
      fontWeight: 600,
    },
    '& .footer-rightSide--socialBox': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '120px',
    },
    '& .footer-rightSide--qrcodeBox': {
      padding: 12,
      background: '#fff',
      width: 'max-content',
      display: 'flex',
      marginTop: 20,
    },
  },
}))

export const Footer: FC = (props: Props) => {
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
    <Root container>
      <Grid item xs={12} md={8} className="footer-leftSide">
        <Grid container rowSpacing={{ xs: 4, md: 6 }} columnSpacing={{ xs: 0, md: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">menu.</Typography>
            <Box className="footer-leftSide--divider" />
            <Grid container mt={2.5} rowSpacing={3}>
              {menu.map((item: MenuItemProps) => (
                <Grid item xs={6} key={item.id} className={`footer-menu--item ${styles.MenuItem}`}>
                  <Link href={item.link}>{`${item.title}.`}</Link>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box width={{ md: 220, xs: 220 }}>
              <Typography variant="h4">{fio}</Typography>
              <Box className="footer-leftSide--divider" />
              <Typography variant="body2" fontWeight={600} mt={3}>
                designer, developer, creator, and just a cool pepper.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={2}>
            <Typography variant="h6" className="footer-leftSide--createdWithLove">
              created in 2022 .//. with <span>❤</span>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} className="footer-rightSide">
        <Grid container rowSpacing={2}>
          <SocialMedia color="white" dividerColor="light" />
          <Grid item xs={12}>
            <Box className="footer-rightSide--qrcodeBox">
              <Image width="95px" height="95px" src={buyMeACoffeQR} alt="buyMeACoffeQR Icon" />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Root>
  )
}
