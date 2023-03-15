import { Divider, Grid, Typography, styled } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import { getAboutData } from 'shared/api/home.api'
import { LanguageProps } from 'shared/types/general'

import { UserLanguageContext } from '@/components/layout/Layout'
import { HeaderWrapper } from '@/components/layout/header/HeaderWrapper'
import { AboutBody } from '@/components/screens/Home/components'

import { HeaderBG } from '@/assets/icons/backgrounds'

import { ContactsBody } from '../Contacts/components'

import { WorkHistory } from './components'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: `0 ${theme.spacing(4)}`,
  [theme.breakpoints.down('md')]: {
    padding: `0 ${theme.spacing(2.5)}`,
  },
}))

export const AboutWrapper = (props: Props) => {
  const context = useContext(UserLanguageContext)
  const [data, setData] = useState<any>()

  // setData(res.projectsBlocks[LanguageProps[context.language]]
  useEffect(() => {
    getAboutData().then((res: any) => setData(res))
  }, [context.language])

  if (data === undefined) return <Typography>Loading...</Typography>

  return (
    <Root container rowSpacing={12}>
      <Grid item xs={12}>
        <HeaderWrapper
          subtitle="creative developer"
          photoBG={HeaderBG}
          position="background"
          shift="unstyled"
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
        <AboutBody data={data.aboutBlocks[LanguageProps[context.language]]} fio={context.data.fio} />

        <Divider light />
      </Grid>

      <Grid item xs={12}>
        <WorkHistory data={data.workHistoryBlocks[LanguageProps[context.language]]} />

        <Divider light />
      </Grid>

      <Grid item xs={12}>
        <ContactsBody
          data={data.contactsBlocks[LanguageProps[context.language]]}
          fio={context.data.fio}
          stack={data.homePages[LanguageProps[context.language]].techStack}
        />
        <Divider light />
      </Grid>
    </Root>
  )
}
