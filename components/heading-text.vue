<template>
  <div>
    <h1 class="text-lg font-semibold">
      <slot />
    </h1>
    <h2 v-if="subtext" class="font-light">
      {{ subtext }}
    </h2>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  subtext?: string;
}>();
</script>

<style></style>
