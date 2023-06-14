import type { RequestHandler } from './$types'
import { PUBLIC_API_HOST } from '$env/static/public';

export const GET: RequestHandler = async ({ url }) => {
  const page = url.searchParams.get('page') || 1

  const res = await fetch(`${PUBLIC_API_HOST}/posts?page=${page}`)
  const data = await res.json()

  return new Response(JSON.stringify(data))
};
