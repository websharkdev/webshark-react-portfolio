import { Box, Button, Grid, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { DataProps } from 'shared/types/home'

import { SocialMedia } from '@/components/layout/SocialMedia'

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
      display: 'flex',
      '& .about-content--container-title': {
        fontSize: 96,
        fontWeight: 600,
        letterSpacing: 1.5,
        lineHeight: '135px',
      },
    },
  },
}))

export const AboutBody = ({ data }: Props) => {
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
            <SocialMedia />
          </Grid>
        </Grid>
      </Grid>
    </Root>
  )
}
