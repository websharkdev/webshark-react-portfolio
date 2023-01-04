import { Box, Grid, styled } from '@mui/material'
import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { LanguageProps, ProjectItemProps } from 'shared/types/home'

import { ProjectItem } from '@/components/projects'

import { home_dataEN, home_dataRU } from '../Home/data'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({}))

export const ProjectsWrapper: FC<Props> = (props) => {
  const [language, setLanguage] = useState<LanguageProps>('en')
  const [home_bodyData, setHome_bodyData] = useState(home_dataEN)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      const LSLanguage: LanguageProps = window!.localStorage!.getItem('language_folio')!
      setLanguage(LSLanguage)
    }
  }, [])

  useEffect(() => {
    switch (language) {
      case 'en':
        setHome_bodyData(home_dataEN)
        break
      case 'ru':
        setHome_bodyData(home_dataRU)
        break

      default:
        break
    }
  }, [language])

  const { project } = home_bodyData

  return (
    <Root container>
      {project.projects.map((item: ProjectItemProps, id: number) => (
        <ProjectItem data={item} variant={id % 2 ? 'green' : 'purpule'} />
      ))}
    </Root>
  )
}
