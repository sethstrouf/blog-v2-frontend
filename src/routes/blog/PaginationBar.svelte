<script lang="ts">
  export let meta: { page: number, prev: number, next: number, from: number, to: number, pages: number, count: number }
</script>

<div class="flex items-center justify-between bg-white px-4 py-3 sm:px-6" >
  <nav class="flex flex-1 justify-between sm:hidden" data-sveltekit-reload>
    <a href={`/blog?page=${meta.prev}`} data-sveltekit-preload-data>
      <button disabled={meta.prev == null} class="disabled:hidden relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
        Previous
      </button>
    </a>
    <a href={`/blog?page=${meta.next}`} data-sveltekit-preload-data>
      <button disabled={meta.next == null} class="disabled:hidden relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
        Next
      </button>
    </a>
  </nav>
  <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
    <div>
      <p class="text-sm text-gray-700">
        Showing
        <span class="font-medium">{meta.from}</span>
        to
        <span class="font-medium">{meta.to}</span>
        of
        <span class="font-medium">{meta.count}</span>
        results
      </p>
    </div>
    <div>
      <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination" data-sveltekit-reload>
        <a href={`/blog?page=${meta.prev}`} data-sveltekit-preload-data>
          <span class="sr-only">Previous</span>
          <button disabled={meta.prev == null} class="disabled:text-gray-50 disabled:hover:bg-gray-50 relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
            </svg>
          </button>
        </a>
        <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:outline-offset-0" -->
        {#each Array(meta.pages) as _, page}
          <a href={`/blog?page=${page + 1}`} data-sveltekit-preload-data aria-current={meta.page == page + 1 && 'page'} class="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0 md:inline-flex">{page + 1}</a>
        {/each}
        <a href={`/blog?page=${meta.next}`} data-sveltekit-preload-data>
          <span class="sr-only">Next</span>
          <button disabled={meta.next == null} class="disabled:text-gray-50 disabled:hover:bg-gray-50 relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:z-20 focus:outline-offset-0">
            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
            </svg>
          </button>
        </a>
      </nav>
    </div>
  </div>
</div>

<style lang="postcss">
  [aria-current="page"] {
    @apply relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600;
  }
</style>
