export interface IconProps {
  id: string
  url: string
  fileName: string
}

export type MenuItemProps = {
  id: string
  href: string
  name: string
}

export type ButtonProps = {
  id: string
  name: string
  href: string
}

export type HomePageData = {
  sub_title: string
  text: string
  buttons: ButtonProps
}

export type ContactsItemProps = {
  id: number
  name: string
  href: string
}

export type SocialItemProps = {
  id: string
  icon: IconProps
  href: string
  tooltip?: string
}

export type AboutPageData = {
  id: string
  section: string
  text: string
  buttons: ButtonProps[]
}

export type ProjectItemProps = {
  id: string
  title: string
  text: string
  stack: string[]
  slider: IconProps[]
  buttons: ButtonProps[]
}

export type ProjectsPageData = {
  section: string
  buttons: ButtonProps[]
  projectItems: ProjectItemProps[]
}

export type WorkHistoryItemProps = {
  id: string
  title: string
  started: string
  ended: string
}

export type WorkHistoryProps = {
  id: string
  section: string
  text: string
  title: string
  workHistories: WorkHistoryItemProps[]
}

export type PersonalInfoProps = {
  id: string
  name: string
  props: string
}

export type ContactsProps = {
  id: string
  section: string
  text: string
  contacts: MenuItemProps[]
  baseInfos: PersonalInfoProps[]
}

export type AboutProps = {
  aboutBlocks: AboutPageData[]
  homePages: {
    techStack: string
  }[]
  workHistoryBlocks: WorkHistoryProps[]
  contactsBlocks: ContactsProps[]
}

export type HeaderDataProps = {
  contacts: MenuItemProps[]
  cvLink: string
  fio: string
  id: string
  languages: string[]
  mail: string
  menus: MenuItemProps[]
  phone: string
  socialMedias: SocialItemProps[]
}

export type ImagePositionProps = 'default' | 'unStyled' | 'block' | 'background'

export type ImageSProps = {
  xs?: number[]
  sm?: number[]
  md?: number[]
  lg?: number[]
  xl?: number[]
}

export type PhotoContainerProps = {
  mainPhoto?: any
  photoBG?: any
  position?: 'default' | 'unStyled' | 'block' | 'background'
  size?: ImageSProps
  shift?: ImageSProps
  className?: string
}

export type HomePagesProps = {
  techStack: string
  aboutBlocks: AboutPageData[]
  fio: string
  headerBlocks: {
    id: string
    subtitle: string
    text: string
    buttons: ButtonProps[]
  }[]
  contactsBlocks: ContactsProps[]
  projectsBlocks: ProjectsPageData[]
}
