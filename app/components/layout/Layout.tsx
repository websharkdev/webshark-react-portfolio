import { motion, useScroll } from 'framer-motion'
import { FC, ReactElement, createContext, useEffect, useState } from 'react'
import { getGeneralData } from 'shared/api/home.api'
import { LanguageProps } from 'shared/types/general'
import { HeaderDataProps } from 'shared/types/home'

import { HelpUkraine } from '@/components/layout/HelpUkraine'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

import styles from './layout.module.sass'

interface LanguageContext {
  language: LanguageProps
  setLanguage: (language: LanguageProps) => void
  data: HeaderDataProps
}
// @ts-ignore
export const UserLanguageContext = createContext<LanguageContext>({})

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageProps>(LanguageProps['en'])
  const [data, setData] = useState<HeaderDataProps>()
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const LSLang = window.localStorage.getItem('language_folio') || 'en'

    // @ts-ignore
    setLanguage(LSLang || 'en')
    getGeneralData().then((res: any) => setData(res.generals[0]))
  }, [])

  if (data === undefined) return <div>Loading...</div>

  return (
    <UserLanguageContext.Provider
      value={{
        language,
        setLanguage,
        data,
      }}
    >
      <motion.div className={styles.ProgressBar} style={{ scaleX: scrollYProgress }} />
      <div className={styles.layout}>
        {data && <Header data={data} />}
        <div className={styles.page}>{children}</div>
        <div className={styles.footer}>
          <HelpUkraine />
          {data && <Footer data={data} />}
        </div>
      </div>
    </UserLanguageContext.Provider>
  )
}

export default Layout
