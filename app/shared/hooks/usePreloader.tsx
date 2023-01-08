import { useLayoutEffect, useState } from 'react'

import PreloaderPage from '../../../pages/preloader'

type Props = {
  children: React.ReactNode
  state: boolean
  setState: any
}

export const UsePreloader = ({ children, state, setState }: Props) => {
  useLayoutEffect(() => {
    setState(true)
  }, [])
  return <>{state ? <>{children}</> : <PreloaderPage />}</>
}
