import { Box, Grid, Typography, styled } from '@mui/material'
import { FC } from 'react'
import { useInView } from 'react-intersection-observer'
import { ParallaxLink, ParallaxText } from 'shared/hooks'
import { ContactsProps, PersonalInfoProps } from 'shared/types/home'

import { SocialMedia } from '@/components/layout/SocialMedia'

type Props = {
  data: any
  fio?: string
  stack?: string
}

const Root = styled(Grid)(({ theme }) => ({
  padding: `${theme.spacing(12)} 0`,
  justifyContent: 'flex-start',
  '& .contacts_page--textDivider': {
    width: '100%',
    maxWidth: 120,
    marginBottom: theme.spacing(3),
    height: 2,
    background: theme.palette.primary.dark,
    [theme.breakpoints.down('md')]: {
      maxWidth: 64,
    },
  },
  '& .contacts_page--title': {
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

export const ContactsBody: FC<Props> = ({ data, fio, stack }) => {
  const { section, text, baseInfos } = data
  const [innerRef, inView] = useInView()

  return (
    <Box pb={12} sx={{ minHeight: '110vh' }} ref={innerRef}>
      <Root container rowSpacing={10} direction={'column'}>
        <Grid item xs={12} className="contacts_page-section">
          <Typography variant="h3">{section}</Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container className="contacts_page-content--container" columnSpacing={5}>
            <Grid item xs={12} md={6} xl={5}>
              <Typography variant="h1" className="contacts_page--title">
                {fio}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} xl={3} my={{ xs: 4, md: 0 }}>
              <Box className="contacts_page--textDivider" />
              <Typography variant="body2" my={4}>
                {text}
              </Typography>
              {baseInfos?.map(({ name, props, id }: PersonalInfoProps) => (
                <Box key={id} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography variant="body2" mr={1} sx={{ fontSize: { xs: 12, md: 14, lg: 16 } }}>
                    {name}:
                  </Typography>

                  <Typography variant="body1" sx={{ fontSize: { xs: 12, md: 14, lg: 16 } }}>
                    {props}
                  </Typography>
                </Box>
              ))}
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <SocialMedia />
            </Grid>
          </Grid>
        </Grid>
      </Root>
      {stack ? (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
          <ParallaxText fontSize={32} baseVelocity={0.3} inView={inView}>
            {stack}
          </ParallaxText>
          <ParallaxText fontSize={32} baseVelocity={-0.3} inView={inView}>
            {stack}
          </ParallaxText>
        </Box>
      ) : (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
          <ParallaxLink data={stack === undefined && data.contacts} fontSize={32} baseVelocity={0.05} inView={inView} />
          <ParallaxLink
            data={stack === undefined && data.contacts}
            fontSize={32}
            baseVelocity={-0.05}
            inView={inView}
          />
        </Box>
      )}
    </Box>
  )
}
