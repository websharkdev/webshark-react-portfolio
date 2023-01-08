import { Box, Button, Grid, Typography, styled, useMediaQuery } from '@mui/material'
import { DataProps } from 'shared/types/home'

import { PhotoContainer } from '@/components/layout/photoContainer'

import { HeaderBG } from '@/assets/icons/backgrounds'
import { HeaderPhoto } from '@/assets/icons/photos'

type Props = {
  data: DataProps
}

const Root = styled(Grid)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  height: '100%',
  minHeight: 'calc(100vh - 250px)',
  [theme.breakpoints.up('md')]: {
    minHeight: 550,
  },
  '& .home-body--header-subtitleBox': {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '& .home-body--header-subtitle': {
      maxWidth: 300,
    },
  },
  '& .home-body--header-titleBox-container': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',

    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
      height: '90%',
    },
    [theme.breakpoints.down('md')]: {
      height: 'max-content',
      justifyContent: 'space-between',
    },

    '& .home-body--header-titleBox': {
      justifyContent: 'flex-end',
      order: -5,
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        marginBottom: theme.spacing(4),
      },
      '& .home-body--header-title': {
        fontSize: 96,
        fontWeight: 600,
        letterSpacing: 1.5,
        lineHeight: '135px',
        [theme.breakpoints.down('xl')]: {
          lineHeight: '98px',
        },
        [theme.breakpoints.down('lg')]: {
          fontSize: 64,
          lineHeight: '85px',
        },
        [theme.breakpoints.down('md')]: {
          fontSize: 32,
          lineHeight: '36px',
        },
      },
    },
    '& .home-body--header-textBox': {
      marginTop: theme.spacing(2),
      [theme.breakpoints.down('lg')]: {
        marginTop: 0,
      },
      '& .home-body--header-textDivider': {
        width: '100%',
        maxWidth: 120,
        marginBottom: theme.spacing(3),
        height: 2,
        background: theme.palette.primary.dark,
      },
      '& .home-body--header-text': {
        maxWidth: 400,
        color: theme.palette.text.primary,
      },
    },
  },
}))

export const HomeBody = ({ data }: Props) => {
  const { home } = data
  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.up('md')
  )

  return (
    <Root container>
      {tablet && (
        <Grid item xs={12} lg={4} xl={7}>
          <Box className="home-body--header-subtitleBox" width="100%">
            <Typography className="home-body--header-subtitle" variant="h3">
              {home.sub_title}
            </Typography>
          </Box>
        </Grid>
      )}
      <PhotoContainer
        mainPhoto={HeaderPhoto}
        photoBG={HeaderBG}
        size={{
          xs: [256, 256],
          sm: [440, 440],
          md: [500, 500],
        }}
        shift={{
          xs: [24, 24],
          md: [48, 48],
          xl: [75, 75],
        }}
      />
      <Grid item sx={{ height: { xs: 'max-content', md: 'auto' } }} xs={12} lg={7} xl={5}>
        <Box className="home-body--header-titleBox-container">
          <Box className="home-body--header-textBox">
            <Box className="home-body--header-textDivider" />
            <Typography variant="body2" className="home-body--header-text">
              {home.text}
            </Typography>
          </Box>
          <Box className="home-body--header-titleBox">
            <Typography component="div" width={{ xs: '70%', md: 500, lg: 700 }}>
              <span className="home-body--header-title">{data.fio}</span>

              {tablet && (
                <Button sx={{ ml: 4, mb: 4 }} size="large" href={`mailto:${home.btn.link}`} variant="contained">
                  {home.btn.name}
                </Button>
              )}
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Root>
  )
}
