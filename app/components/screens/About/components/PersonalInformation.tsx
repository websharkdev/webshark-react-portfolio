import { Box, Divider, Grid, Typography, styled } from '@mui/material'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { ParallaxText } from 'shared/hooks'
import { DataProps } from 'shared/types/home'

import { SocialMedia } from '@/components/layout/SocialMedia'

type Props = {
  data: DataProps
}

const Root = styled(Grid)(({ theme }) => ({
  paddingBottom: theme.spacing(12),
  '& .personal_info--textDivider': {
    width: '100%',
    maxWidth: 120,
    marginBottom: theme.spacing(3),
    height: 2,
    background: theme.palette.primary.dark,
    [theme.breakpoints.down('md')]: {
      maxWidth: 64,
    },
  },
  '& .personal_info--title': {
    fontSize: 96,
    fontWeight: 600,
    letterSpacing: 1.5,
    lineHeight: '135px',
    [theme.breakpoints.down('xl')]: {
      fontSize: 64,
      lineHeight: '68px',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 42,
      lineHeight: '52px',
    },
  },
}))

export const PersonalInformation = ({ data }: Props) => {
  const { personal_info, fio } = data
  const [innerRef, inView] = useInView()

  return (
    <Box pb={17}>
      <Root container rowSpacing={10} direction={'column'} ref={innerRef}>
        <Grid item xs={12} className="personal_info-section">
          <Typography variant="h3">{personal_info.section}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="personal_info-content--container" columnSpacing={5}>
            <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
              <Typography variant="h1" component="div" className="personal_info--title">
                {fio}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={10} md={6} lg={4} xl={3} my={{ xs: 4, md: 0 }}>
              <Box className="personal_info--textDivider" />
              <Typography variant="body2" my={4}>
                {personal_info.text}
              </Typography>
              {personal_info.personal_information.map(({ title, text, id }: any) => (
                <Box key={id} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2" mr={1} sx={{ fontSize: { xs: 12, md: 14, xl: 16 } }}>
                    {title}:
                  </Typography>

                  <Typography variant="body1" sx={{ fontSize: { xs: 12, md: 14, xl: 16 } }}>
                    {' '}
                    {text}
                  </Typography>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} sm={10} md={6} lg={'auto'}>
              <SocialMedia />
            </Grid>
          </Grid>
        </Grid>
      </Root>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <ParallaxText baseVelocity={0.3} inView={inView}>
          {personal_info.tech_stack}
        </ParallaxText>
        <ParallaxText baseVelocity={-0.3} inView={inView}>
          {personal_info.tech_stack}
        </ParallaxText>
      </Box>
    </Box>
  )
}
