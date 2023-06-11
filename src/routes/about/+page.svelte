<script>
  import hannahPhoto from '$lib/images/hannah.jpg'
</script>

<div class="mx-auto max-w-7xl px-6 lg:px-8 text-center lg:text-left">
  <h1 class="text-center">bio</h1>
  <div class="mx-auto flex max-w-2xl flex-col items-end justify-between gap-16 lg:mx-0 lg:max-w-none lg:flex-row">
    <div class="w-full lg:max-w-lg lg:flex-auto">
      <img src={hannahPhoto} alt="Hannah" class="aspect-[6/5] w-full rounded-2xl object-scale-down lg:aspect-auto lg:h-[34.5rem]">
    </div>
    <div class="w-full lg:max-w-xl lg:flex-auto">
      <ul class="-my-8 divide-y divide-gray-100">
        <li class="py-8">
          <dl class="relative flex flex-wrap gap-x-3">
            <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
              education
            </dd>
            <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">Hannah is a life-long Nebraskan with a liberal arts degree in journalism & media and philosophy.</dd>
          </dl>
        </li>
        <li class="py-8">
          <dl class="relative flex flex-wrap gap-x-3">
            <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
              interests
            </dd>
            <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">When not making marketing magic, her interests include distance running, pastries, yoga, feminism, traveling and her cats.</dd>
          </dl>
        </li>
        <li class="py-8">
          <dl class="relative flex flex-wrap gap-x-3">
            <dd class="w-full flex-none text-lg font-semibold tracking-tight text-gray-900">
              gallup strengths
            </dd>
            <dd class="mt-2 w-full flex-none text-base leading-7 text-gray-600">
              <ul>
                <li>achiever</li>
                <li>activator</li>
                <li>strategic</li>
                <li>command</li>
                <li>focus</li>
              </ul>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</div>
