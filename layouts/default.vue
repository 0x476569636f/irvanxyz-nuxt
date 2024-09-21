<template>
  <UContainer
    class="flex min-h-screen flex-col px-4 py-4 md:container md:w-[48rem] md:px-0 md:py-8"
  >
    <navbar />
    <slot />
    <Footer />
  </UContainer>
</template>

<script lang="ts" setup></script>

<style>
body {
  font-family: "Inter", sans-serif;
  @apply text-zinc-500 dark:text-green-300;
}

.welcome {
  @apply font-light text-zinc-500 dark:text-green-300;
}
</style>
