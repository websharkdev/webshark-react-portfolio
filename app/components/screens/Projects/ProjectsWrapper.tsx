import { Box, Divider, Grid, styled } from '@mui/material'
import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from 'shared/hooks/useLanguage'
import { LanguageProps, ProjectItemProps } from 'shared/types/home'

import { HeaderWrapper } from '@/components/layout/header/HeaderWrapper'
import { ProjectItem } from '@/components/projects'

import { HeaderBG } from '@/assets/icons/backgrounds'

import { home_dataEN, home_dataRU } from '../Home/data'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: ` ${theme.spacing(6)} ${theme.spacing(4)}`,
}))

export const ProjectsWrapper: FC<Props> = (props) => {
  const [language, setLanguage] = useState<LanguageProps>('en')
  const [data, setData] = useState(home_dataEN)
  useLanguage({
    dataEN: home_dataEN,
    dataRU: home_dataRU,
    setData,
    language,
    setLanguage,
  })
  const { project } = data

  return (
    <Root container rowSpacing={12}>
      <Grid item xs={12}>
        <HeaderWrapper
          subtitle={'creative. developer'}
          photoBG={HeaderBG}
          position="background"
          shift={{
            xs: [12, 12],
            sm: [24, 24],
            md: [48, 48],
          }}
          size={{
            xs: [256, 256],
            sm: [440, 440],
          }}
          title={data.fio}
          text="Woooop. Looks like works page. Have fun in this page (of course no, I have a girlfriend)"
        />
        <Divider light />
      </Grid>
      {project.projects.map((item: ProjectItemProps, id: number) => (
        <Grid item xs={12} key={id}>
          <ProjectItem data={item} variant={id % 2 ? 'green' : 'purpule'} />
        </Grid>
      ))}
    </Root>
  )
}
