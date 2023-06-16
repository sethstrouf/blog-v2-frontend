<script>
  import "../app.css"
  import NavigationBar from "./Navigation.svelte";
  import Footer from "./Footer.svelte";
</script>

<div class="flex flex-col h-screen justify-between bg-gray-100">
  <NavigationBar />

  <main class="mb-auto py-12 lg:py-20">
    <slot />
  </main>

  <Footer />
</div>
