import { Box, Grid, styled } from '@mui/material'
import Image from 'next/image'

type Props = {
  mainPhoto: any
  photoBG: any
  size?: {
    xs?: number[]
    sm?: number[]
    md?: number[]
    lg?: number[]
    xl?: number[]
  }
  shift?: {
    xs?: number[]
    sm?: number[]
    md?: number[]
    lg?: number[]
    xl?: number[]
  }
}

const Root = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  [theme.breakpoints.down('md')]: {
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  zIndex: -1,
  width: '100%',
  height: '100%',
  '& .photo-container--box': {
    position: 'relative',
    width: '100%',
    height: '100%',
    '& .photo-container--box-subimage': {
      position: 'absolute',
      zIndex: -1,
    },
  },
}))

export const PhotoContainer = ({ mainPhoto, photoBG, size, shift }: Props) => {
  return (
    <Root
      className="photo-container"
      width={{
        xs: size?.xs ? size.xs[0] : 256,
        sm: size?.sm && size.sm[0],
        md: size?.md && size.md[0],
        lg: size?.lg && size.lg[0],
        xl: size?.xl && size.xl[0],
      }}
      height={{
        xs: size?.xs ? size.xs[1] : 256,
        sm: size?.sm && size.sm[1],
        md: size?.md && size.md[1],
        lg: size?.lg && size.lg[1],
        xl: size?.xl && size.xl[1],
      }}
    >
      <Box className="photo-container--box" width="100%" height="100%">
        <img src={mainPhoto} width="100%" height="100%" alt="main_image" />
        <Box
          className="photo-container--box-subimage"
          sx={{
            width: '100%',
            height: '100%',
            top: {
              xs: shift?.xs ? shift.xs[1] : 75,
              sm: shift?.sm && shift.sm[1],
              md: shift?.md && shift.md[1],
              lg: shift?.lg && shift.lg[1],
              xl: shift?.xl && shift.xl[1],
            },
            left: {
              xs: shift?.xs ? shift.xs[0] : 75,
              sm: shift?.sm && shift.sm[0],
              md: shift?.md && shift.md[0],
              lg: shift?.lg && shift.lg[0],
              xl: shift?.xl && shift.xl[0],
            },
          }}
        >
          <img src={photoBG} alt="sub_image" width="100%" height="100%" />
        </Box>
      </Box>
    </Root>
  )
}
