import { Divider, Grid, Typography, styled } from '@mui/material'
import { FC, useContext, useEffect, useState } from 'react'
import { getWorksData } from 'shared/api/home.api'
import { useLanguage } from 'shared/hooks/useLanguage'
import { LanguageProps } from 'shared/types/general'
import { ProjectItemProps } from 'shared/types/home'

import { UserLanguageContext } from '@/components/layout/Layout'
import { HeaderWrapper } from '@/components/layout/header/HeaderWrapper'
import { ProjectItem } from '@/components/projects'

import { HeaderBG } from '@/assets/icons/backgrounds'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: ` ${theme.spacing(6)} ${theme.spacing(4)}`,
}))

export const ProjectsWrapper: FC<Props> = (props) => {
  const context = useContext(UserLanguageContext)
  const [data, setData] = useState<any>()

  useEffect(() => {
    getWorksData().then((res: any) => setData(res.projectsBlocks[LanguageProps[context.language]]))
  }, [])

  if (data === undefined) return <Typography>Loading...</Typography>

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
      {data.projectItems.map((item: ProjectItemProps, id: number) => (
        <Grid item xs={12} key={id}>
          <ProjectItem data={item} variant={id % 2 ? 'green' : 'purpule'} />
        </Grid>
      ))}
    </Root>
  )
}
