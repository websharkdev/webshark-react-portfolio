import { Box, Button, Grid, Link, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { useContext, useState } from 'react'
import { ContactsItemProps, DataProps, SocialItemProps } from 'shared/types/home'

import { UserLanguageContext } from '@/components/layout/Layout'

import { AboutPhoto } from '@/assets/icons/photos'

type Props = {
  data: DataProps
}

const Root = styled(Grid)(({ theme }) => ({
  padding: `${theme.spacing(12)} 0`,
  '& .about-photo--container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& .about-content--container': {
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    width: 700,
    height: '100%',
    marginLeft: 'auto',
    '& .about-content--container-textDivider': {
      width: '100%',
      maxWidth: 120,
      marginBottom: theme.spacing(3),
      height: 2,
      background: theme.palette.primary.dark,
    },
    '& .about-content--container-text': {
      width: 540,
      color: theme.palette.text.primary,
    },
    '& .about-content--container-titleBox': {
      justifyContent: 'flex-end',
      display: 'flex',
      '& .about-content--container-title': {
        fontSize: 96,
        fontWeight: 600,
        letterSpacing: 1.5,
        lineHeight: '135px',
      },
    },
  },
  '& .about-content--socials-container': {
    display: 'flex',
    marginTop: theme.spacing(2),
    '& .about-content--socials-item': {
      marginRight: theme.spacing(2),
    },
  },
  '& .about-content--links-container': {
    display: 'flex',
    flexDirection: 'column',
    '& .about-content--links-item': {
      marginBottom: theme.spacing(2),
    },
  },
}))

export const AboutBody = ({ data }: Props) => {
  const { home_data } = useContext(UserLanguageContext)
  const { about } = data
  return (
    <Root container rowSpacing={10}>
      <Grid item xs={12} className="about-section">
        <Typography variant="h4">{about.section}</Typography>
      </Grid>
      <Grid item xs={7} className="about-photo--container">
        <Image src={AboutPhoto} alt="about me photo" />
      </Grid>
      <Grid item xs={5}>
        <Grid container direction={'column'} className="about-content--container">
          <Grid item>
            <Box className="about-content--container-textDivider" />
            <Typography className="about-content--container-text" variant="body2">
              {about.text}
            </Typography>
          </Grid>
          <Grid item className="about-content--container-titleBox">
            <Box className="about-content--container-titleBox">
              <Typography component="div" width={700}>
                <span className="about-content--container-title">{data.fio}</span>

                <Button sx={{ ml: 4, mb: 4 }} size="large" href={about.btn.link} variant="contained">
                  {about.btn.name}
                </Button>
              </Typography>
            </Box>
          </Grid>
          <Grid item flex={1} />
          <Grid item>
            <Box className="about-content--container-textDivider" />

            <Box className="about-content--links-container">
              {home_data.contacts.map((item: ContactsItemProps) => (
                <Link
                  href={item.href}
                  className="about-content--links-item"
                  key={item.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.name}
                </Link>
              ))}
            </Box>

            <Box className="about-content--socials-container">
              {home_data.socials.map((item: SocialItemProps) => (
                <Link
                  href={item.href}
                  className="about-content--socials-item"
                  key={item.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {/* @ts-ignore */}
                  <Image src={item.icon} alt="social-item--icon" />
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Root>
  )
}
