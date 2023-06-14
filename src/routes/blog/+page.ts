import type { PageLoad } from './$types'

export const load = (async ({ fetch, url }) => {
  let page = url.searchParams.get('page') || 1

  const fetchPosts = async () => {
    const res = await fetch(`/api/posts?page=${page}`)
    const data = await res.json()

    return data
  }

  return {
    posts: fetchPosts()
  }
}) satisfies PageLoad
