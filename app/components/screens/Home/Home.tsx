import { Box, Divider, Grid, Typography, styled } from '@mui/material'
import { FC, useContext, useEffect, useState } from 'react'
import { useWidth } from 'shared/hooks'
import { LanguageProps } from 'shared/types/home'

import { UserLanguageContext } from '@/components/layout/Layout'

import styles from '@/screens/Home/home.module.sass'

import { AboutBody, ContactsBody, HomeBody, HomeScroll, ProjectsBody, StackBody } from './components'
import { home_data, home_dataEN, home_dataRU } from './data'

type Props = {}

const Root = styled(Box)(({ theme }) => ({
  width: 'calc(100% - 68px)',
  margin: '0 auto',
  '& .home--header': {
    [theme.breakpoints.up('md')]: {
      minHeight: '800px',
      paddingTop: '100px',
    },
    [theme.breakpoints.down('md')]: {
      minHeight: 'max-content',
      height: '100%',
      padding: `${theme.spacing(6)} 0`,
    },
    position: 'relative',
    '& .left-side': {
      position: 'absolute',
      zIndex: 15,
      left: 0,
      bottom: '175px',
    },
  },
}))

export const Home: FC<Props> = (props) => {
  const [language, setLanguage] = useState<LanguageProps>('en')
  const [home_bodyData, setHome_bodyData] = useState(home_dataEN)
  const languageProps = useContext(UserLanguageContext)
  const currentBreakpoint = useWidth()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      const LSLanguage: LanguageProps = window!.localStorage!.getItem('language_folio')!
      setLanguage(LSLanguage)
    }
  }, [languageProps.language])

  useEffect(() => {
    languageProps.setLanguage(language)

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

  return (
    <Root className={styles.Wrapper}>
      <Box className="home--header" width="100%">
        {currentBreakpoint === 'md' || currentBreakpoint === 'lg' || currentBreakpoint === 'xl' ? (
          <Box className="left-side">
            <HomeScroll />
          </Box>
        ) : null}
        <HomeBody data={home_bodyData} />
      </Box>

      <Box className="home--about" width="100%">
        <Divider light />
        <AboutBody data={home_bodyData} />
      </Box>

      <Box className="home--stack" width="100%">
        <Divider light />
        <StackBody data={home_bodyData} />
      </Box>

      <Box className="home--projects" width="100%">
        <Divider light />
        <ProjectsBody data={home_bodyData} />
      </Box>

      <Box className="home--contacts" width="100%">
        <Divider light />
        <ContactsBody data={home_bodyData} />
      </Box>
    </Root>
  )
}
