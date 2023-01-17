import { ImageProps } from 'next/image'

export interface Image {
  src: string
  alt: string
  size?: 'xl' | 'lg' | 'md' | 'xs'
}

export interface HomeSwiperItem {
  id: number
  image: Image
}

export type LanguageProps = 'en' | 'es' | 'uk' | 'ru'

export type MenuItemProps = {
  id: number
  link: string
  title: string
}

export type ButtonProps = {
  name: string
  link: string
}

export type HomePageData = {
  sub_title: string
  text: string
  btn: ButtonProps
}

export type ContactsItemProps = {
  id: number
  name: string
  href: string
}

export type SocialItemProps = {
  id: number
  icon: React.ReactElement
  href: string
}

export type AboutPageData = {
  section: string
  text: string
  btn: ButtonProps
}

export type StackPageData = {
  section: string
  tech_stack: string
}

export type ProjectItemProps = {
  id: number
  title: string
  text: string
  stack: string[]
  slider: string[]
  btn: ButtonProps
}
export type ProjectsPageData = {
  section: string
  projects: ProjectItemProps[]
}
export type WorkHistoryItemProps = {
  id: number
  title: string
  started: Date | number
  ended: Date | number
}

export type WorkHistoryProps = {
  section: string
  text: string
  history: WorkHistoryItemProps[]
}

export type DataProps = {
  menu: MenuItemProps[]
  fio: string
  header_fio: string
  home: HomePageData
  about: AboutPageData
  personal_info: any
  work_history: WorkHistoryProps
  stack: StackPageData
  project: ProjectsPageData
}

export type ImagePositionProps = 'default' | 'unStyled' | 'block' | 'background'

export type ImageSizeProps = {
  xs?: number[]
  sm?: number[]
  md?: number[]
  lg?: number[]
  xl?: number[]
}

export type ImageShiftProps = {
  xs?: number[]
  sm?: number[]
  md?: number[]
  lg?: number[]
  xl?: number[]
}

export type PhotoContainerProps = {
  mainPhoto?: ImageProps
  photoBG?: ImageProps
  position?: 'default' | 'unStyled' | 'block' | 'background'
  size?: ImageSizeProps
  shift?: ImageShiftProps
  className?: string
}
