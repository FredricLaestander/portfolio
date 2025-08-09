import { client } from './lib/client'
import { About, Project } from './types'

export const getAbout = async (): Promise<About> => {
  return await client.fetch('*[_type == "about"][0]')
}

export const getProjects = async (): Promise<Project[]> => {
  return await client.fetch('*[_type == "projects"]')
}
