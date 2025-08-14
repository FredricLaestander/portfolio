import { PortableTextBlock, SanityDocument } from 'next-sanity'
import { Image, ImageMetadata } from 'sanity'

export type About = SanityDocument & {
  heroText: string
  introduction: PortableTextBlock
  description: PortableTextBlock
  images: (Image & { metadata: ImageMetadata })[]
  socials: { label: string; icon: string; url: string; color: string }[]
  skills: { label: string; icon: string; url: string; color: string }[]
}

export type Project = SanityDocument & {
  title: string
  background_color: string
  light_text: boolean
  images: (Image & { metadata: ImageMetadata })[]
  links: { live_deployment: string; repository: string }
  tech_stack: { label: string; url: string }[]
  description: PortableTextBlock
}
