import { motion, useScroll } from 'framer-motion'
import { FC, ReactElement, RefObject, createContext, useEffect, useRef, useState } from 'react'
import { LanguageProps } from 'shared/types/home'

import { HelpUkraine } from '@/components/layout/HelpUkraine'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

import { home_data } from '../screens/Home/data'

import styles from './layout.module.sass'

interface LanguageContext {
  language: LanguageProps
  setLanguage: any
  home_data: any
}
// @ts-ignore
export const UserLanguageContext = createContext<LanguageContext>({})

function useFollowPointer(ref: RefObject<HTMLElement>) {
  const [point, setPoint] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!ref.current) return

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!

      const x = clientX - element.offsetLeft - element.offsetWidth / 2
      const y = clientY - element.offsetTop - element.offsetHeight / 2
      setPoint({ x, y })
    }

    window.addEventListener('pointermove', handlePointerMove)

    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  return point
}

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
  const [language, setLanguage] = useState<LanguageProps>('en')
  const { scrollYProgress } = useScroll()

  const ref = useRef(null)
  const { x, y } = useFollowPointer(ref)
  return (
    <UserLanguageContext.Provider
      value={{
        language,
        setLanguage,
        home_data,
      }}
    >
      <motion.div className={styles.ProgressBar} style={{ scaleX: scrollYProgress }} />
      {/* <motion.div
        ref={ref}
        className="box"
        animate={{ x, y }}
        transition={{
          type: 'spring',
          damping: 5,
          stiffness: 50,
          restDelta: 0.001,
        }}
      /> */}

      <div className={styles.layout}>
        <Header />
        <div className={styles.page}>{children}</div>
        <HelpUkraine />
        <Footer />
      </div>
    </UserLanguageContext.Provider>
  )
}

export default Layout
