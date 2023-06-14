<script>
  import "../app.css"
  import NavigationBar from "./Navigation.svelte";
  import Footer from "./Footer.svelte";
</script>

<div class="flex flex-col h-screen justify-between">
  <NavigationBar />

  <main class="mb-auto bg-white py-12 lg:py-20">
    <slot />
  </main>

  <Footer />
</div>
