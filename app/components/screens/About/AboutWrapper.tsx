import { Divider, Grid, styled } from '@mui/material'
import { useState } from 'react'
import { useLanguage } from 'shared/hooks/useLanguage'
import { LanguageProps } from 'shared/types/home'

import { HeaderWrapper } from '@/components/layout/header/HeaderWrapper'
import { AboutBody } from '@/components/screens/Home/components'
import { home_dataEN, home_dataRU } from '@/components/screens/Home/data'

import { HeaderBG } from '@/assets/icons/backgrounds'

import { PersonalInformation, WorkHistory } from './components'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: `0 ${theme.spacing(4)}`,
  // width: `calc(100% - ${theme.spacing(4 * 2)})`,
  [theme.breakpoints.down('md')]: {
    // width: `calc(100% - ${theme.spacing(2.5 * 2)})`,
    padding: `0 ${theme.spacing(2.5)}`,
  },
}))

export const AboutWrapper = (props: Props) => {
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
    <Root container rowSpacing={12}>
      <Grid item xs={12}>
        <HeaderWrapper
          subtitle="creative developer"
          photoBG={HeaderBG}
          position="background"
          shift={'unstyled'}
          size={{
            xs: [256, 256],
            sm: [440, 440],
            md: [500, 500],
          }}
          title={
            <>
              About. <br />
              page.
            </>
          }
          text="Woooop. Looks like about page. Have fun in this page (of course no, I have a girlfriend)"
        />

        <Divider light />
      </Grid>
      <Grid item xs={12}>
        <AboutBody data={home_bodyData} />

        <Divider light />
      </Grid>
      <Grid item xs={12}>
        <WorkHistory data={home_bodyData} />

        <Divider light />
      </Grid>
      <Grid item xs={12}>
        <PersonalInformation data={home_bodyData} />

        <Divider light />
      </Grid>
    </Root>
  )
}
