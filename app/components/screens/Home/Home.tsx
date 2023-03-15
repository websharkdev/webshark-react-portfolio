import { Divider, Grid, Typography, styled } from '@mui/material'
import { FC, useContext, useEffect, useState } from 'react'
import { getHomeData } from 'shared/api/home.api'
import { LanguageProps } from 'shared/types/general'

import { UserLanguageContext } from '@/components/layout/Layout'
import { HeaderWrapper } from '@/components/layout/header/HeaderWrapper'

import styles from '@/screens/Home/home.module.sass'

import { HeaderBG } from '@/assets/icons/backgrounds'
import { HeaderPhoto } from '@/assets/icons/photos'

import { ContactsBody } from '../Contacts/components'

import { AboutBody, ProjectsBody, StackBody } from './components'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  width: 'calc(100% - 68px)',
  [theme.breakpoints.down('md')]: {
    width: 'calc(100% - 42px)',
  },
  margin: '0 auto',
  '& .home--component': {
    width: '100%',
  },
  '& .home--header': {
    padding: '0 ',
  },
}))

export const Home: FC<Props> = (props) => {
  const context = useContext(UserLanguageContext)
  const [data, setData] = useState<any>()

  useEffect(() => {
    getHomeData().then((res: any) => setData(res.homePages[LanguageProps[context.language]]))
  }, [context.language])

  if (data === undefined) return <Typography>Loading...</Typography>

  return (
    <Root container rowSpacing={10} className={styles.Wrapper}>
      <Grid item xs={12} className="home--header home--component">
        <HeaderWrapper
          subtitle={data.headerBlocks[0].subtitle}
          photoBG={HeaderBG}
          mainPhoto={HeaderPhoto}
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
          link={data.headerBlocks[0].buttons[0].href}
          titleLink={data.headerBlocks[0].buttons[0].name}
          title={data.fio}
          text={data.headerBlocks[0].text}
        />
        <Divider light />
      </Grid>

      <Grid item xs={12} className="home--about home--component">
        <AboutBody data={data.aboutBlocks[0]} fio={data.fio} />
        <Divider light />
      </Grid>

      <Grid item xs={12} className="home--stack home--component">
        <StackBody stack={data.techStack} section="stack" />
        <Divider light />
      </Grid>

      <Grid item xs={12} className="home--projects home--component">
        <ProjectsBody data={data.projectsBlocks[0]} />
        <Divider light />
      </Grid>

      <Grid item xs={12} className="home--contact home--component">
        <ContactsBody data={data.contactsBlocks[0]} fio={data.fio} />
      </Grid>
    </Root>
  )
}
