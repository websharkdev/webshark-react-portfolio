import { Box } from '@mui/material'
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
  return <>{state ? <Box>{children}</Box> : <PreloaderPage />}</>
}
