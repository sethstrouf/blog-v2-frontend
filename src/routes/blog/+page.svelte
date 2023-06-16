<script lang="ts">
  import { PUBLIC_API_HOST } from '$env/static/public';
  import type { PageData } from './$types'
	import PaginationBar from './PaginationBar.svelte';
  import FormattedDate from '$lib/FormattedDate.svelte';

  export let data: PageData

  const posts = data.posts.data
  const meta = data.posts.meta
</script>

<div>
  <div class="mx-auto max-w-5xl px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <h2 class="hidden">blog</h2>
      <PaginationBar {meta} />
      <div class="border-t border-gray-200">
        <div class="mt-12" />
        {#each posts as post (post.id)}
          <article class="relative isolate mb-20 flex flex-col gap-8 lg:flex-row text-center lg:text-left lg:items-center lg:justify-center">
            {#if post.attributes.images.length}
              <div class="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <a href="/blog/{post.id}" data-sveltekit-preload-data>
                  <img src={`${PUBLIC_API_HOST}/${post.attributes.images[0].url}`} alt={post.attributes.images[0].filename} class="absolute h-full w-full hover:brightness-90 rounded-3xl border-2 border-valencia-800 object-cover">
                </a>
              </div>
            {:else}
              <div class="hidden lg:block relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                <a href="/blog/{post.id}" data-sveltekit-preload-data>
                  <div class="absolute h-full w-full" />
                </a>
              </div>
            {/if}
            <div>
              <p class="flex justify-center text-xs lg:justify-start text-gray-500"><FormattedDate date={post.attributes.created_at}/></p>
              <div class="relative">
                <h2 class="mt-2">
                  <a href="/blog/{post.id}" data-sveltekit-preload-data>
                    {post.attributes.title}
                  </a>
                </h2>
                <p class="mt-5 text-sm leading-6 text-gray-600">{post.attributes.summary}</p>
              </div>
            </div>
          </article>
        {/each}
      </div>
      <div class="-mt-20 border-t border-gray-200" />
      <PaginationBar {meta} />
    </div>
  </div>
</div>
