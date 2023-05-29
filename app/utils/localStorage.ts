import LanguageProps from 'shared/types/general'

const getStoreLocal = (name: string) => {
  if (typeof localStorage !== 'undefined') {
    const ls = localStorage.getItem(name)
    return ls ? JSON.parse(ls) : null
  }
  return null
}

export default getStoreLocal

export const getLanguageLocal = (setLanguage: (language: LanguageProps) => void) => {
  if (typeof window !== 'undefined') {
    const LSLanguage: any = window!.localStorage!.getItem('language_folio')!
    setLanguage(LSLanguage)
  }
}
