<template>
  <nav class="select-none bg-background px-18">
    <div class="flex justify-between">
      <NuxtLink to="/" class="flex items-center">
        <h1 class="text-lg font-bold">./{{ appConfig.site.name }}</h1>
      </NuxtLink>
      <div class="flex gap-4">
        <ul class="flex items-center space-x-4 text-sm">
          <NuxtLink to="/" class="hover:underline">
            <p>Home</p>
          </NuxtLink>
          <NuxtLink to="/dashboard" class="hover:underline">
            <p>Dashboard</p>
          </NuxtLink>
        </ul>
        <ColorModeToggle />
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const appConfig = useAppConfig();
</script>

<style></style>
