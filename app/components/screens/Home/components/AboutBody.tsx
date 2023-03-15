import { Box, Button, Grid, Typography, styled, useMediaQuery } from '@mui/material'
import { AboutProps } from 'shared/types/home'

import { SocialMedia } from '@/components/layout/SocialMedia'
import { PhotoContainer } from '@/components/layout/photoContainer'

import { AboutPhoto } from '@/assets/icons/photos'

type Props = {
  data: any
  fio?: any
}

const Root = styled(Grid)(({ theme }) => ({
  paddingBottom: theme.spacing(12),
  justifyContent: 'space-between',
  '& .about-photo--container': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& .about-content--container': {
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      width: 'calc(100% - 45px)',
      marginLeft: 'auto',
    },
    '& .about-content--container-textDivider': {
      width: '100%',
      maxWidth: 120,
      marginBottom: theme.spacing(3),
      height: 2,
      background: theme.palette.primary.dark,
      [theme.breakpoints.down('md')]: {
        maxWidth: 64,
      },
    },
    '& .about-content--container-text': {
      width: 540,
      [theme.breakpoints.down('lg')]: {
        width: 420,
      },
      [theme.breakpoints.down('md')]: {
        width: '100%',
        fontSize: 12,
      },
      color: theme.palette.text.primary,
    },
    '& .about-content--container-titleBox': {
      display: 'flex',
      '& .about-content--container-title': {
        [theme.breakpoints.down('lg')]: {
          marginRight: theme.spacing(2),
        },
        [theme.breakpoints.down('md')]: {
          marginRight: theme.spacing(1),
        },
        [theme.breakpoints.down('sm')]: {
          marginRight: theme.spacing(2),
        },
        [theme.breakpoints.down(490)]: {
          marginRight: theme.spacing(2),
        },
      },
    },
  },
}))

export const AboutBody = ({ data, fio }: Props) => {
  const { section, text, buttons } = data
  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('md')
  )

  return (
    <Root container rowSpacing={{ xs: 5, md: 10 }} columnSpacing={{ xs: 0, sm: 5, md: 0 }}>
      <Grid item xs={12} className="about-section">
        <Typography variant="h3">{section}.</Typography>
      </Grid>
      <Grid item xs={12} md={6} xl={5} className="about-photo--container">
        <PhotoContainer
          mainPhoto={AboutPhoto}
          position="block"
          size={{
            xs: [256, 368],
            sm: [440, 552],
            md: [500, 612],
            lg: [612, 724],
          }}
        />
      </Grid>
      <Grid item xs={12} md={6} xl={5} width="min-content">
        <Grid container direction={'column'} className="about-content--container" rowSpacing={3}>
          <Grid item>
            <Box className="about-content--container-textDivider" />
            <Typography className="about-content--container-text" variant="body2">
              {text}
            </Typography>
          </Grid>
          <Grid item className="about-content--container-titleBox">
            <Box className="about-content--container-titleBox">
              <Typography component="div" width={{ xs: '100%', lg: '100%' }}>
                <Typography variant="h1" component={'span'} className="about-content--container-title">
                  {fio}
                </Typography>

                <Button
                  sx={{ ml: { xs: 0, sm: 4 }, mb: { xs: 0, sm: 4 }, mt: { xs: 1.5, sm: 0 } }}
                  size={tablet ? 'medium' : 'large'}
                  className="about-content--container-btn"
                  href={buttons[0].href}
                  variant="contained"
                >
                  {buttons[0].name}
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
