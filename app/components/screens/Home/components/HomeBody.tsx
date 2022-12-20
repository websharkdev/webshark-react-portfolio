import { Box, Button, Grid, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { DataProps } from 'shared/types/home'

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
  minHeight: 550,
  '& .home-body--header-subtitleBox': {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '& .home-body--header-subtitle': {
      maxWidth: 300,
    },
  },
  '& .home-body--header-fotoBox-container': {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: -1,
    width: 540,
    height: 540,
    [theme.breakpoints.down('lg')]: {
      width: 440,
      height: 440,
    },
    '& .home-body--header-fotoBox': {
      position: 'relative',
      '& .home-body--header-foto-main': {
        width: '100%',
        height: '100%',
      },
      '& .home-body--header-foto-rat': {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 75,
        left: 75,
        zIndex: -1,
      },
    },
  },
  '& .home-body--header-titleBox-container': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column',
    height: 'calc(100% + 90px)',
    '& .home-body--header-titleBox': {
      justifyContent: 'flex-end',
      display: 'flex',
      '& .home-body--header-title': {
        fontSize: 96,
        fontWeight: 600,
        letterSpacing: 1.5,
        lineHeight: '135px',
        [theme.breakpoints.down('lg')]: {
          fontSize: 64,
          lineHeight: '85px',
        },
      },
    },
    '& .home-body--header-textBox': {
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
  return (
    <Root container>
      <Grid item lg={4} xl={7}>
        <Box className="home-body--header-subtitleBox" width="100%">
          <Typography className="home-body--header-subtitle" variant="h3">
            {home.sub_title}
          </Typography>
        </Box>
      </Grid>
      <Box className="home-body--header-fotoBox-container">
        <Box className="home-body--header-fotoBox" width="100%">
          <Image src={HeaderPhoto} className="home-body--header-foto-main" alt="home-body--header-foto-subimage" />
          <Box className="home-body--header-foto-rat">
            <Image src={HeaderBG} alt="home-body--header-foto-subimage" />
          </Box>
        </Box>
      </Box>
      <Grid item lg={7} xl={5}>
        <Box className="home-body--header-titleBox-container">
          <Box className="home-body--header-textBox">
            <Box className="home-body--header-textDivider" />
            <Typography variant="body2" className="home-body--header-text">
              {home.text}
            </Typography>
          </Box>
          <Box className="home-body--header-titleBox">
            <Typography component="div" width={{ xs: 500, lg: 700 }}>
              <span className="home-body--header-title">{data.fio}</span>

              <Button sx={{ ml: 4, mb: 4 }} size="large" href={`mailto:${home.btn.link}`} variant="contained">
                {home.btn.name}
              </Button>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Root>
  )
}
