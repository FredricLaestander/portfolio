import { createClient, type QueryParams } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

export const sanityFetch = <const QueryString extends string>({
  query,
  params = {},
  revalidate = 900,
  tags = [],
}: {
  query: QueryString
  params?: QueryParams
  revalidate?: number | false
  tags?: string[]
}) => {
  return client.fetch(query, params, {
    cache: 'force-cache',
    next: {
      revalidate: tags.length ? false : revalidate,
      tags,
    },
  })
}
