import { client } from './lib/client'
import { About, Project } from './types'

export const getAbout = async (): Promise<About> => {
  return await client.fetch(
    '*[_type == "about"]{..., images[]{..., "metadata": asset->metadata}}[0]',
  )
}

export const getProjects = async (): Promise<Project[]> => {
  return await client.fetch(
    '*[_type == "projects"]{..., images[]{..., "metadata": asset->metadata}}',
  )
}

export const getOpengraph = async (): Promise<{
  heroText: string
  ogText: string
}> => {
  return await client.fetch('*[_type == "about"]{heroText, ogText}[0]')
}
