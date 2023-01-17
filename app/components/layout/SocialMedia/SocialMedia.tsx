import { Grid, Link as MuiLink, styled } from '@mui/material'
import Image from 'next/image'
import { memo, useContext } from 'react'
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
    [theme.breakpoints.down('md')]: {
      maxWidth: 64,
    },
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

export const SocialMedia = memo(({ dividerColor = 'default', color = 'default' }: Props) => {
  const { home_data } = useContext(UserLanguageContext)
  return (
    <Root container flexWrap="nowrap" direction="column">
      <Grid item className={`social-media--textDivider ${dividerColor}`} />

      <Grid item className="social-media--links-container">
        <Grid container flexWrap="nowrap" direction="column" rowSpacing={1}>
          {home_data.contacts.map((item: ContactsItemProps) => (
            <Grid item key={item.id}>
              <MuiLink
                href={item.href}
                className={`social-media--links-item ${color}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </MuiLink>
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Grid item className="social-media--socials-container">
        <Grid container flexWrap="nowrap" direction="row" columnSpacing={1}>
          {home_data.socials.map((item: SocialItemProps) => (
            <Grid item key={item.id}>
              <MuiLink
                href={item.href}
                className="about-content--socials-item unstyled"
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* @ts-ignore */}
                <Image src={item.icon} alt="social-item--icon" />
              </MuiLink>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Root>
  )
})
