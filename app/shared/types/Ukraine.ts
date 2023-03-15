export type UkraineAidCardProps = {
  id: number
  title: string
  text: string
  image: string
  link: LinkProps
}

export interface ImageHelpUkraineProps {
  id: number
  src: string
  alt: string
}

export type UkraineProps = {
  section: string
  images: ImageHelpUkraineProps[]
  text: {
    id: number
    text: string
  }[]
  financially: {
    section: string
    text: string
    aids: UkraineAidCardProps[]
  }
}

export type LinkProps = {
  id: string
  href: string
  name: string
}

export type HelpAidProps = {
  id: string
  image: string
  link: LinkProps
  read_more: LinkProps[]
  text: string
  name: string
}

export type HelpUkraineFinanciallyProps = {
  aids: HelpAidProps[]
  section: string
  text: string
}

export type ParallaxTextProps = {
  id: string
  text: string
}
