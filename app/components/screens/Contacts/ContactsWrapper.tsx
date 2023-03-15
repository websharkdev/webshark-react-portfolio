import { Divider, Grid, Typography, styled } from '@mui/material'
import { FC, useContext, useEffect, useState } from 'react'
import { getContactsData } from 'shared/api/home.api'
import { LanguageProps } from 'shared/types/general'
import { ContactsProps } from 'shared/types/home'

import { UserLanguageContext } from '@/components/layout/Layout'
import { HeaderWrapper } from '@/components/layout/header/HeaderWrapper'

import { HeaderBG } from '@/assets/icons/backgrounds'

import { ContactsBody } from './components'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: `0 ${theme.spacing(4)}`,
}))
export const ContactsWrapper: FC<Props> = (props) => {
  const context = useContext(UserLanguageContext)
  const [data, setData] = useState<ContactsProps>()
  useEffect(() => {
    getContactsData().then((res: any) => setData(res.contactsBlocks[LanguageProps[context.language]]))
  }, [])

  if (data === undefined) return <Typography>Loading...</Typography>

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
        <ContactsBody data={data} fio={context.data.fio} />
      </Grid>
    </Root>
  )
}
