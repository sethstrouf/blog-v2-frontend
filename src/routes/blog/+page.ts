import type { PageLoad } from './$types'

export const load = (async ({ fetch, url }) => {
  let page = url.searchParams.get('page') || 1
  const items = 10

  const fetchPosts = async () => {
    const res = await fetch(`/api/posts?items=${items}&page=${page}`)
    const data = await res.json()

    return data
  }

  return {
    posts: fetchPosts()
  }
}) satisfies PageLoad
