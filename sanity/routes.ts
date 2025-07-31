import { client } from './lib/client'
import { About } from './types'

export const getAbout = async (): Promise<About> => {
  return await client.fetch('*[_type == "about"][0]')
}
