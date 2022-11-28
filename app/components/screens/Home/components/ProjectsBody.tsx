// import { useRef } from 'react'import { wrap } from '@motionone/utils'
import { wrap } from '@motionone/utils'
import { Box, Button, Grid, Typography, styled } from '@mui/material'
import { MotionValue, Variants, motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { ProjectItemProps } from 'shared/types/home'

import { ProjectItem } from '@/components/projects'

type Props = {
  data: any
}

const Root = styled(Grid)(({ theme }) => ({
  padding: `${theme.spacing(12)} 0`,
  '& .card-container': {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '-100px',
    width: '100%',
    height: '100%',
    '& .card': {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px 0',
    },
  },
}))

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 0.4,
    },
  },
}

export const ProjectsBody = ({ data }: Props) => {
  const { project } = data

  return (
    <Box>
      <Root container rowSpacing={4}>
        <Grid item xs={12} className="projects-section">
          <Typography variant="h4">{project.section}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container wrap="nowrap" direction="column" rowSpacing={4}>
            {project.projects.map((item: ProjectItemProps, id: number) => (
              <Grid item key={item.id} xs={12}>
                <ProjectItem data={item} variant={id % 2 ? 'green' : 'purpule'} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Root>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button href="#" size={'medium'}>
          Show more.
        </Button>
      </Box>
    </Box>
  )
}
