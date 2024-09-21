<template>
  <a
    :href="project.link"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="project.repo"
    class="flex flex-col justify-between gap-2 rounded p-4 hover:bg-muted"
  >
    <div class="flex flex-col gap-1">
      <h3 class="font-semibold tracking-tight text-base">{{ project.repo }}</h3>
      <p class="text-muted-foreground line-clamp-2 text-sm font-light">
        {{ project.description }}
      </p>
    </div>
    <p class="text-sm text-muted-foreground flex items-center gap-1">
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="remixicon h-4 w-4"
      >
        <path
          d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17ZM11.9998 14.6564L14.8165 16.3769L14.0507 13.1664L16.5574 11.0192L13.2673 10.7554L11.9998 7.70792L10.7323 10.7554L7.44228 11.0192L9.94893 13.1664L9.18311 16.3769L11.9998 14.6564Z"
        ></path>
      </svg>
      {{ project.stars }}
    </p>
  </a>
</template>

<script lang="ts" setup>
type GithubRepo = {
  repo: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  link: string;
  website: string;
};

interface ProjectCardProps {
  project: GithubRepo;
}

defineProps<ProjectCardProps>();
</script>

<style></style>
