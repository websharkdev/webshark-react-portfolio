import { Divider, Grid, styled } from '@mui/material'
import React, { FC, useContext, useEffect, useState } from 'react'
import { useLanguage } from 'shared/hooks/useLanguage'
import { LanguageProps } from 'shared/types/home'

import { UserLanguageContext } from '@/components/layout/Layout'
import { HeaderWrapper } from '@/components/layout/header/HeaderWrapper'
import { home_dataEN, home_dataRU } from '@/components/screens/Home/data'

import { HeaderBG } from '@/assets/icons/backgrounds'

import { ContactsBody } from './components'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: `0 ${theme.spacing(4)}`,
}))
export const ContactsWrapper: FC<Props> = (props) => {
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
    <Root container>
      <Grid item xs={12}>
        <HeaderWrapper
          subtitle={'creative developer'}
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
            md: [500, 500],
          }}
          title={
            <>
              Contacts. <br />
              page.
            </>
          }
          text={'Woooop. Looks like contacts page. Have fun in this page (of course no, I have a girlfriend)'}
        />

        <Divider />
      </Grid>
      <Grid item xs={12}>
        <ContactsBody data={home_bodyData} />
      </Grid>
    </Root>
  )
}
