<script>
  import { page } from '$app/stores'

  $: path = $page.route.id
</script>

<nav class="bg-white shadow">
  <!-- Non-Mobile menu -->
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex sm:h-16 w-full justify-center">
      <div class="flex items-center sm:space-x-16 md:space-x-38 lg:space-x-60">
        <div>
          <h1 class="hidden sm:block text-2xl md:text-4xl"><a href="/">hannah bauer</a></h1>
        </div>
        <div class="sm:-mb-0.5 hidden sm:flex sm:space-x-8 flex-wrap">
          <!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
          <a href="/hello" aria-current={path === '/hello' && 'page'} class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-base lg:text-lg font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">hello</a>
          <a href="/about" aria-current={path === '/about' && 'page'} class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-base lg:text-lg font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">about</a>
          <a href="/work" aria-current={path === '/work' && 'page'} class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-base lg:text-lg font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">work</a>
          <a href="/contact" aria-current={path === '/contact' && 'page'} class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-base lg:text-lg font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">contact</a>
          <a href="/" aria-current={path === '/' && 'page'} class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-base lg:text-lg font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">blog</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  <div class="sm:hidden text-center" id="mobile-menu">
    <div>
      <!-- Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" -->
      <a href="/hello" aria-current={path === '/hello' && 'page'} class="block border-l-4 border-transparent py-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">hello</a>
      <a href="/about" aria-current={path === '/about' && 'page'} class="block border-l-4 border-transparent py-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">about</a>
      <a href="/work" aria-current={path === '/work' && 'page'} class="block border-l-4 border-transparent py-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">work</a>
      <a href="/contact" aria-current={path === '/contact' && 'page'} class="block border-l-4 border-transparent py-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">contact</a>
      <a href="/" aria-current={path === '/' && 'page'} class="block border-l-4 border-transparent py-2 text-sm font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">blog</a>
    </div>
  </div>
</nav>

<style lang="postcss">
  [aria-current="page"] {
    @apply bg-indigo-50 border-indigo-500 text-indigo-700 sm:bg-transparent sm:text-gray-900;
  }
</style>
