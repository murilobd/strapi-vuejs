<template>
  <div class="relative bg-white overflow-hidden">
    <div class="max-w-screen-xl mx-auto">
      <div
        class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
      >
        <svg
          class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            class="relative flex items-center justify-between sm:h-10 lg:justify-start"
          >
            <div
              class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0"
            >
              <div class="flex items-center justify-between w-full md:w-auto">
                <router-link
                  :to="$t('homes-header.tinyLogo.url')"
                  aria-label="Home"
                >
                  <img
                    class="h-8 w-auto sm:h-10"
                    :src="`http://localhost:1337${$t('homes-header.tinyLogo.image.url')}`"
                    :alt="$t('homes-header.tinyLogo.alt')"
                  />
                </router-link>
                <div class="-mr-2 flex items-center md:hidden">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    id="main-menu"
                    aria-label="Main menu"
                    aria-haspopup="true"
                  >
                    <svg
                      class="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div class="hidden md:block md:ml-10 md:pr-4">
              <router-link
                v-for="link in $t('homes-header.navLinks')"
                :key="link.id"
                :to="link.url"
                class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >{{ link.name }}</router-link>
            </div>
          </nav>
        </div>

        <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
        -->
        <div
          class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div class="rounded-lg shadow-md">
            <div
              class="rounded-lg bg-white shadow-xs overflow-hidden"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img
                    class="h-8 w-auto"
                    :src="`http://localhost:1337${$t('homes-header.tinyLogo.image.url')}`"
                    :alt="$t('homes-header.tinyLogo.alt')"
                  />
                </div>
                <div class="-mr-2">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    aria-label="Close menu"
                  >
                    <svg
                      class="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3">
                <router-link
                  v-for="link in $t('homes-header.navLinks')"
                  :key="link.id"
                  :to="link.url"
                  class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                  role="menuitem"
                >{{ link.name }}</router-link>
              </div>
            </div>
          </div>
        </div>

        <main
          class="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
        >
          <div class="sm:text-center lg:text-left">
            <h2
              class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
            >
              {{ $t('homes-header.title') }}
              <!-- Data to enrich your
              <br class="xl:hidden" />
              <span class="text-green-600">online business</span>-->
            </h2>
            <p
              class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
            >{{ $t('homes-header.subtitle') }}</p>
            <div
              class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
            >
              <div class="rounded-md shadow">
                <router-link
                  :to="$t('homes-header.button1.url')"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >{{ $t('homes-header.button1.label') }}</router-link>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <router-link
                  :to="$t('homes-header.button2.url')"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-green-700 bg-green-100 hover:text-green-600 hover:bg-green-50 focus:outline-none focus:shadow-outline-green focus:border-green-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                >{{ $t('homes-header.button2.label') }}</router-link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img
        class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
        :src="`http://localhost:1337${$t('homes-header.backgroundImage.image.url')}`"
        :alt="$t('homes-header.backgroundImage.alt')"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
