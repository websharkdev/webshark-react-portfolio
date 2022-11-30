import { Box, Button, Chip, Grid, IconButton, Tooltip, Typography, styled } from '@mui/material'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Thumbs } from 'swiper'
// Import Swiper styles
import 'swiper/css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import { DotsIcon, MinusIcon } from '@/assets/icons/ui'

import styles from './project.module.sass'

type Props = {
  data: any
  variant: 'green' | 'purpule'
  id: number
}

const Root = styled(Grid)(({ theme }) => ({
  padding: `${theme.spacing(7)} 0`,
  background: theme.palette.primary.light,
  borderRadius: 4,
  height: 'max-content',
  '&.green ': {
    background: theme.palette.secondary.light,
  },
  '& .projects-item--photo': {
    padding: `0 ${theme.spacing(4)}`,
    height: '100%',
    '& .projects-item--photo-item': {
      width: '100%',
      height: '100%',
      '& img': {
        width: '100%',
        height: '100%',
        display: 'block',
        objectFit: 'cover',
      },
    },
  },

  '& .projects-item--content': {
    flexWrap: 'nowrap',
    flexDirection: 'column',
    height: '100%',
    margin: 'auto',
    '& .projects-item--content-titleContainer': {
      paddingTop: 0,
    },
    '& .projects-item--content-textContainer': {
      width: '100%',
      maxWidth: 400,
      '& .projects-item--content-textDivider': {
        width: '100%',
        maxWidth: 120,
        marginBottom: theme.spacing(3),
        height: 2,
        background: theme.palette.primary.dark,
      },
    },
    '& .projects-item--content-stackContainer': {
      overflow: 'visible',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      '& .projects-item--content-stackWrapper': {
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
      },
    },
    '& .projects-item--content-swiperThumbsContainer': {
      height: 70,
      '& .projects-item--content-swiperThumbsItem': {
        height: 90,
        width: '25%',
        minWidth: 120,
        opacity: 0.4,
        cursor: 'pointer',
        overflow: 'hidden',
        '&.swiper-slide-thumb-active': {
          opacity: 1,
        },
        '& img': {
          borderRadius: 4,
          width: '100%',
          height: '100%',
        },
      },
    },
  },
}))

export const ProjectItem = ({ data, variant, id }: Props) => {
  const [showAllStack, setShowAllStack] = useState<boolean>(false)
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

  const cardVariants = {
    offscreen: {
      x: `${id % 2 ? '-' : '+'}100vw`,
    },
    onscreen: {
      x: 0,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }
  return (
    <motion.div initial="offscreen" whileInView="onscreen" viewport={{ once: false, amount: 0.2 }}>
      <motion.div className="card" variants={cardVariants}>
        <Root container className={variant}>
          <Grid item xs={8} className="projects-item--photo">
            <Swiper
              thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
              modules={[Thumbs]}
            >
              {data.slider.map((item: string, index: number) => (
                <SwiperSlide className="projects-item--photo-item" key={index}>
                  <img src={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Grid>
          <Grid item xs={4}>
            <Grid container rowSpacing={4} className="projects-item--content">
              <Grid item className="projects-item--content-titleContainer">
                <Typography variant="h3" className="projects-item--content-title">
                  {data.title}
                </Typography>
              </Grid>
              <Grid item className="projects-item--content-textContainer">
                <Box className="projects-item--content-textDivider" />
                <Typography className="projects-item--content-text" variant="body2">
                  {data.text}
                </Typography>
              </Grid>
              <Grid item xs={10} sx={{ flex: '1 !important' }} className="projects-item--content-stackContainer">
                <Grid
                  container
                  rowSpacing={1.5}
                  columnSpacing={1}
                  className={`projects-item--content-stackWrapper ${styles.StackWrapper}`}
                >
                  {data.stack
                    .map((item: string, id: number) => (
                      <Grid item key={id}>
                        <Tooltip title={item} className="projects-item--content-stackItem">
                          <Chip label={item} />
                        </Tooltip>
                      </Grid>
                    ))
                    .slice(0, showAllStack ? 999 : 4)}
                  <Grid item>
                    <IconButton onClick={() => setShowAllStack(!showAllStack)}>
                      <Image src={showAllStack ? MinusIcon : DotsIcon} alt="dots-icon" />
                    </IconButton>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={10} className="projects-item--content-swiperThumbsContainer">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={3}
                  modules={[Thumbs]}
                  style={{
                    paddingRight: 30,
                  }}
                >
                  {data.slider.map((item: string, index: number) => (
                    <SwiperSlide className="projects-item--content-swiperThumbsItem" key={index}>
                      <img src={item} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </Grid>
              <Grid item flex={1} />
              <Grid item className="projects-item--content-btnContainer">
                <Button
                  className="projects-item--content-btn"
                  variant={variant === 'purpule' ? 'contained' : 'outlined'}
                >
                  {data.btn.name}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Root>
      </motion.div>
    </motion.div>
  )
}
