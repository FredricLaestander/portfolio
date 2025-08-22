import { PortableTextBlock, SanityDocument } from 'next-sanity'
import { Image, ImageMetadata } from 'sanity'

export type About = SanityDocument & {
  heroText: string
  introduction: PortableTextBlock
  description: PortableTextBlock
  images: { asset: Image; alt: string; metadata: ImageMetadata }[]
  socials: { label: string; icon: string; url: string; color: string }[]
  skills: { label: string; icon: string; url: string; color: string }[]
  ogText: string
}

export type Project = SanityDocument & {
  title: string
  background_color: string
  light_text: boolean
  images: { asset: Image; alt: string; metadata: ImageMetadata }[]
  links: { live_deployment: string; repository: string }
  tech_stack: { label: string; url: string }[]
  description: PortableTextBlock
}
