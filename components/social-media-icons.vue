<template>
  <div class="flex">
    <a
      :href="appConfig.site.links.github"
      target="_blank"
      aria-label="Github"
      class="rounded px-3 py-2 text-2xl text-zinc-800 dark:!text-green-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
    >
      <UIcon name="ri:github-line" />
    </a>
    <a
      :href="appConfig.site.links.facebook"
      target="_blank"
      aria-label="Facebook"
      class="rounded px-3 py-2 text-2xl text-zinc-800 dark:!text-green-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
    >
      <UIcon name="ri:facebook-line" />
    </a>
    <a
      :href="appConfig.site.links.twitter"
      target="_blank"
      aria-label="Twitter"
      class="rounded px-3 py-2 text-2xl text-zinc-800 dark:!text-green-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
    >
      <UIcon name="ri:twitter-line" />
    </a>
    <a
      :href="appConfig.site.links.linkedin"
      target="_blank"
      aria-label="linkedin"
      class="rounded px-3 py-2 text-2xl text-zinc-800 dark:!text-green-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
    >
      <UIcon name="ri:linkedin-line" />
    </a>
  </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<style></style>
