import type { PageLoad } from './$types'

export const load = (async ({ fetch }) => {

  const fetchPosts = async () => {
    const res = await fetch('/api/posts')
    const data = await res.json()
    return data.data
  }

  return {
    posts: fetchPosts()
  }
}) satisfies PageLoad
