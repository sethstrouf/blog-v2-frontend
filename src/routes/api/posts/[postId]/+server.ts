import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params }) => {
    const res = await fetch(`http://localhost:3000/posts/${params.postId}`)
    const data = await res.json()

    return new Response(JSON.stringify(data))
  };
