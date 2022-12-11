import { Grid, Link, styled } from '@mui/material'
import Image from 'next/image'
import { useContext } from 'react'
import { ContactsItemProps, SocialItemProps } from 'shared/types/home'

import { UserLanguageContext } from '../Layout'

type Props = {
  dividerColor?: 'light' | 'default'
  color?: 'white' | 'default'
}

const Root = styled(Grid)(({ theme }) => ({
  '& .social-media--textDivider': {
    width: '100%',
    maxWidth: 120,
    marginBottom: theme.spacing(3),
    height: 2,
    background: theme.palette.primary.dark,
    '&.light': {
      background: theme.palette.primary.light,
    },
  },
  '& .social-media--socials-container': {
    display: 'flex',
    marginTop: theme.spacing(2),
    '& .social-media--socials-item': {
      marginRight: theme.spacing(2),
    },
  },
  '& .social-media--links-container': {
    display: 'flex',
    flexDirection: 'column',
    '& .social-media--links-item': {
      marginBottom: theme.spacing(2),
      '&.white': {
        color: theme.palette.primary.contrastText,
      },
      '&:hover': {
        color: theme.palette.primary.light,
      },
    },
  },
}))

export const SocialMedia = ({ dividerColor = 'default', color = 'default' }: Props) => {
  const { home_data } = useContext(UserLanguageContext)
  return (
    <Root container flexWrap="nowrap" direction="column">
      <Grid item className={`social-media--textDivider ${dividerColor}`} />

      <Grid item className="social-media--links-container">
        <Grid container flexWrap="nowrap" direction="column" rowSpacing={1}>
          {home_data.contacts.map((item: ContactsItemProps) => (
            <Grid item key={item.id}>
              <Link
                href={item.href}
                className={`social-media--links-item ${color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item className="social-media--socials-container">
        <Grid container flexWrap="nowrap" direction="row" columnSpacing={1}>
          {home_data.socials.map((item: SocialItemProps) => (
            <Grid item key={item.id}>
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
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Root>
  )
}
