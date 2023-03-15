import { useContext, useEffect } from 'react'
import { LanguageProps } from 'shared/types/general'

import { UserLanguageContext } from '@/components/layout/Layout'

import { getLanguageLocal } from '@/utils/localStorage'

type Props = {
  language: LanguageProps
  setLanguage: (language: LanguageProps) => void
}

export const useLanguage = ({ language, setLanguage }: Props) => {
  const context = useContext(UserLanguageContext)
  useEffect(() => {
    getLanguageLocal(setLanguage)
  }, [context.language])

  useEffect(() => {
    context.setLanguage(language)
  }, [language])
}
