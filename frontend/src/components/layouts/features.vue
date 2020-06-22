<template>
  <div class="py-12 bg-white">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p
          class="text-base leading-6 text-green-600 font-semibold tracking-wide uppercase"
        >{{ $t('homes-features.sectionTitle') }}</p>
        <h3
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
        >{{ $t('homes-features.title') }}</h3>
        <p
          class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto"
        >{{ $t('homes-features.subtitle') }}</p>
      </div>

      <div class="mt-10">
        <ul class="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
          <li
            v-for="(feature, index) in $t('homes-features.iconLeftWithTitleSubtitleRight')"
            :key="feature.id"
            :class="index && 'mt-10 md:mt-0'"
          >
            <div class="flex">
              <div class="flex-shrink-0">
                <div
                  class="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white"
                >
                  <div class="h-6 w-6">
                    <img :src="`http://localhost:1337${feature.icon.url}`" />
                  </div>
                </div>
              </div>
              <div class="ml-4">
                <h4
                  class="text-lg leading-6 font-medium text-gray-900"
                >{{ feature.title }}</h4>
                <p
                  class="mt-2 text-base leading-6 text-gray-500"
                >{{ feature.subtitle }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
