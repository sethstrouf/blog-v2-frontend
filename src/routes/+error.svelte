<script lang="ts">
    import { page } from '$app/stores';
</script>

<main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
    <div class="text-center">
      <p class="text-3xl font-semibold text-turquoise-600">{$page.status}</p>
      <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">{$page.error?.message}</h1>
      <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <a href="/blog" class="rounded-md bg-turquoise-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-turquoise-600 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-turquoise-600">Go to blog</a>
      </div>
    </div>
  </main>
