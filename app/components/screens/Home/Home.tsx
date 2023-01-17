import { Divider, Grid, styled } from '@mui/material'
import { FC, useState } from 'react'
import { useLanguage } from 'shared/hooks/useLanguage'
import { LanguageProps } from 'shared/types/home'

import { HeaderWrapper } from '@/components/layout/header/HeaderWrapper'

import styles from '@/screens/Home/home.module.sass'

import { HeaderBG } from '@/assets/icons/backgrounds'
import { HeaderPhoto } from '@/assets/icons/photos'

import { AboutBody, ContactsBody, ProjectsBody, StackBody } from './components'
import { home_dataEN, home_dataRU } from './data'

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
}))

export const Home: FC<Props> = (props) => {
  const [language, setLanguage] = useState<LanguageProps>('en')
  const [home_bodyData, setHome_bodyData] = useState(home_dataEN)
  useLanguage({
    dataEN: home_dataEN,
    dataRU: home_dataRU,
    setData: setHome_bodyData,
    language,
    setLanguage,
  })
  return (
    <Root container rowSpacing={10} className={styles.Wrapper}>
      <Grid item xs={12} className="home--header home--component">
        <HeaderWrapper
          subtitle={home_bodyData.home.sub_title}
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
          link={home_bodyData.home.btn.link}
          titleLink={home_bodyData.home.btn.name}
          title={home_bodyData.header_fio}
          text={home_bodyData.home.text}
        />
        <Divider light />
      </Grid>

      <Grid item xs={12} className="home--about home--component">
        <AboutBody data={home_bodyData} />
        <Divider light />
      </Grid>

      <Grid item xs={12} className="home--stack home--component">
        <StackBody data={home_bodyData} />
        <Divider light />
      </Grid>

      <Grid item xs={12} className="home--projects home--component">
        <ProjectsBody data={home_bodyData} />
        <Divider light />
      </Grid>

      <Grid item xs={12} className="home--contact home--component">
        <ContactsBody data={home_bodyData} />
      </Grid>
    </Root>
  )
}
