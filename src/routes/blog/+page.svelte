<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData

  const getDate = (date: Date) => {
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate().toString().padStart(2, "0");

    return `${month} ${day}, ${date.getFullYear()}`
  }
</script>

<div class="bg-white -mt-12" >
  <div class="mx-auto max-w-5xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <h2 class="hidden">blog</h2>
      <div class="mt-12 space-y-20 lg:mt-20 lg:space-y-20">
        {#each data.posts as post (post.id)}
          <article class="relative isolate flex flex-col gap-8 lg:flex-row text-center lg:text-left lg:items-center lg:justify-center">
            <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
              <img src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80" alt="" class="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover">
            </div>
            <div>
              <div class="flex justify-center text-xs lg:justify-start">
                <time class="text-gray-500">{getDate(new Date(post.attributes.updated_at))}</time>
              </div>
              <div class="relative">
                <h2 class="mt-2">
                  <a href="/blog/{post.id}">
                    {post.attributes.title}
                  </a>
                </h2>
                <p class="mt-5 text-sm leading-6 text-gray-600">{post.attributes.summary}</p>
              </div>
            </div>
          </article>
        {/each}
      </div>
    </div>
  </div>
</div>
