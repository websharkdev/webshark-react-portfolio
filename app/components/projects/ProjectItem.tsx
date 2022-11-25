import { Box, Button, Chip, Grid, IconButton, Tooltip, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'

import { DotsIcon, MinusIcon } from '@/assets/icons/ui'

import styles from './project.module.sass'

type Props = {
  data: any
  variant: 'green' | 'purpule'
}

const Root = styled(Grid)(({ theme }) => ({
  padding: `${theme.spacing(7)} 0`,
  background: theme.palette.primary.light,
  borderRadius: 4,
  minHeight: 825,

  '& .projects-item--content': {
    flexWrap: 'nowrap',
    flexDirection: 'column',
    height: '100%',

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
      overflow: 'hidden',
      display: 'flex',
      flexWrap: 'nowrap',
      alignItems: 'center',
      '& .projects-item--content-stackWrapper': {
        overflow: 'hidden',
        display: 'flex',
        flexWrap: 'nowrap',
        position: 'relative',
        '& .projects-item--content-stackItem': {
          marginRight: theme.spacing(1.5),
        },
      },
    },
  },
}))

export const ProjectItem = ({ data, variant }: Props) => {
  const [stack, setStack] = useState<number>(5)
  const [showAllStack, setShowAllStack] = useState<boolean>(false)
  return (
    <Root container className={variant}>
      <Grid item xs={8} className="projects-item--photo"></Grid>
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
          <Grid item className="projects-item--content-stackContainer">
            <Box className={`projects-item--content-stackWrapper ${styles.StackWrapper}`}>
              {data.stack
                .map((item: string, id: number) => (
                  <Tooltip title={item} key={id} className="projects-item--content-stackItem">
                    <Chip label={item} />
                  </Tooltip>
                ))
                .slice(0, showAllStack ? 999 : 4)}
            </Box>
            <IconButton onClick={() => setShowAllStack(!showAllStack)}>
              <Image src={showAllStack ? MinusIcon : DotsIcon} alt="dots-icon" />
            </IconButton>
          </Grid>
          <Grid item flex={1} />
          <Grid item className="projects-item--content-btnContainer">
            <Button className="projects-item--content-btn" variant={variant === 'purpule' ? 'contained' : 'outlined'}>
              {data.btn.name}
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Root>
  )
}
