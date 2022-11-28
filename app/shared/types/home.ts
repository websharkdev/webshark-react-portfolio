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

export type DataProps = {
  menu: MenuItemProps[]
  fio: string
  home: HomePageData
  about: AboutPageData
  stack: StackPageData
  project: ProjectsPageData
}
