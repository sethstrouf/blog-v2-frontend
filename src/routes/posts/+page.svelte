<script lang="ts">
  import type { PageData } from './$types'

  export let data: PageData
</script>

{#each data.posts as post (post.id)}
  <h3 class="text-3xl pt-12">{post.attributes.title}</h3>
  <strong>{post.attributes.summary}</strong>
  <p>{post.attributes.body}</p>
{/each}
