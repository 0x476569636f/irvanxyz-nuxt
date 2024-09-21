<template>
  <div class="space-y-4 p-4 text-zinc-800 dark:!text-green-300">
    <p class="welcome">Welcome to {{ appConfig.site.name }}&apos;s!</p>
    <p class="font-light">
      I&apos;m a full-stack developer who loves open-source. I enjoy building
      apps in the JavaScript ecosystem and I like learning new technologies.
    </p>
    <p class="font-light">
      My favorite tech stack for building web apps includes
      <a href="https://nextjs.org/" target="_blank" class="font-semibold">
        Nextjs
      </a>
      ,
      <a href="https://react.dev/" target="_blank" class="font-semibold">
        React
      </a>
      ,
      <a
        href="https://www.typescriptlang.org/"
        target="_blank"
        class="font-semibold"
      >
        TypeScript
      </a>
      ,
      <a href="https://bun.sh/" target="_blank" class="font-semibold"> Bun </a>
      for the toolkit and
      <a href="https://hono.dev/" target="_blank" class="font-semibold">
        Hono
      </a>
      for the backend. Sometimes, I also use
      <a href="https://nuxt.com/" target="_blank" class="font-semibold">
        Nuxt
      </a>
      and
      <a href="https://vuejs.org/" target="_blank" class="font-semibold">
        Vue
      </a>
    </p>

    <p class="font-light">
      I am currently
      <span class="font-semibold">&quot;leveling up my skills&quot;</span>
      at
      <span class="font-semibold"> Bina Sarana Informatika University! </span>
      🚀💻.
    </p>
  </div>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<style></style>
