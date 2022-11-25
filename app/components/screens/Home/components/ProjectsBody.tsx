import { Box, Button, Grid, Typography, styled } from '@mui/material'
// import { MotionValue, motion, useScroll, useSpring, useTransform } from 'framer-motion'
// import { useRef } from 'react'
import { ProjectItemProps } from 'shared/types/home'

import { ProjectItem } from '@/components/projects'

type Props = {
  data: any
}

const Root = styled(Grid)(({ theme }) => ({
  padding: `${theme.spacing(12)} 0`,
}))

export const ProjectsBody = ({ data }: Props) => {
  const { project } = data

  return (
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

      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button href="#" size={'medium'}>
          Show more.
        </Button>
      </Grid>
    </Root>
  )
}
