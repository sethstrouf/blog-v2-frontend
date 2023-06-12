import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
  const res = await fetch('http://localhost:3000/posts')
  const data = await res.json()

  return new Response(JSON.stringify(data))
};
