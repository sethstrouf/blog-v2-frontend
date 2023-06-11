<script lang="ts">
  import { browser } from '$app/environment'
  import eventMarketing1 from '$lib/images/eventmarketing1.png'
  import eventMarketing2 from '$lib/images/eventmarketing2.png'
  import eventMarketing3 from '$lib/images/eventmarketing3.jpg'
  import eventMarketing4 from '$lib/images/eventmarketing4.png'

  export let images: any
  export let title: string
  export let description: string
  export let link: string
  export let linkUrl: string

  function onKeyDown(e: KeyboardEvent) {
    if (browser) {
      switch(e.key) {
        case 'Escape':
          closeModal()
          break;
        case 'Enter':
          openModal()
          currentSlide(images[0].id)
          break;
      }
    }
  }

  // Open the Modal
  function openModal() {
    document!.getElementById(`myModal-${images[0].id}`)!.style.display = "block";
  }

  // Close the Modal
  function closeModal() {
    if (browser) {
      document!.getElementById(`myModal-${images[0].id}`)!.style.display = "none";
    }
  }

  let slideIndex = images[0].id;
  showSlides(slideIndex);

  // Next/previous controls
  function plusSlides(n: number) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n: number) {
    showSlides(slideIndex = n);
  }

  function showSlides(n: number) {
    if (browser) {
      let slides = Array.from(document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>)

      if (n - images[0].id > images.length - 1) {slideIndex = images[0].id}
      if (n < images[0].id) {slideIndex = slides.length}

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";
      }
    }
  }
</script>

  <!-- Images used to open the lightbox -->
  <div class="gallery mt-12 p-2 shadow rounded">
    <div class="flex justify-center gap-x-2">
      {#each images as image (image.id)}
        <img src={image.src} alt={image.alt} on:click={openModal} on:click={() => currentSlide(image.id)} on:keydown|preventDefault={onKeyDown} class="hover-shadow preview">
      {/each}
    </div>
    <div>
      <h2>{title}</h2>
      <a href={linkUrl} target="_blank">{link}</a>
      <p>{description}</p>
    </div>
  </div>

  <!-- The Modal/Lightbox -->
  <div id="myModal-{images[0].id}" class="modal">
    <span class="close cursor" on:click={closeModal} on:keydown|preventDefault={onKeyDown}>&times;</span>
    <div class="modal-content">
      {#each images as image (image.id)}
        <div class="mySlides">
          <img src={image.src} alt={image.alt}>
        </div>
      {/each}

      <!-- Next/previous controls -->
      <button class="prev" on:click={() => plusSlides(-1)}>&#10094;</button>
      <button class="next" on:click={() => plusSlides(1)}>&#10095;</button>
    </div>
  </div>

<style lang="postcss">
  h2 {
    @apply text-lg sm:text-xl;
  }

  .gallery img {
    @apply object-cover flex-1 w-full h-28 sm:h-40;
  }

  p {
    @apply text-justify text-sm sm:text-base
  }

  .mySlides img {
    width: 100%;
  }

  /* The Modal (background) */
  .modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: black;
  }

  /* Modal Content */
  .modal-content {
    position: relative;
    background-color: #fefefe;
    margin: auto;
    padding: 0;
    width: 90%;
    max-width: 1200px;
  }

  /* The Close Button */
  .close {
    color: white;
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 35px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: #999;
    text-decoration: none;
    cursor: pointer;
  }

  /* Hide the slides by default */
  .mySlides {
    display: none;
  }

  /* Next & previous buttons */
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    padding: 16px;
    margin-top: -50px;
    color: orange;
    font-weight: bold;
    font-size: 20px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }

  /* On hover, add a black background color with a little bit see-through */
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  img.hover-shadow {
    transition: 0.3s;
  }

  .hover-shadow:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  img.preview {
    opacity: 0.9;
    @apply cursor-pointer;
  }

  .preview:hover {
    opacity: 1;
  }

  img.hover-shadow {
    transition: 0.3s;
  }

  .hover-shadow:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
</style>

<svelte:window on:keydown|preventDefault={onKeyDown} />
