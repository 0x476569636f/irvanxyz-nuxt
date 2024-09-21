<template>
  <main class="py-2">
    <section class="py-4">
      <Introduction />
      <SocialMediaIcons />
    </section>
    <section class="space-y-4 py-4">
      <div class="px-3">
        <HeadingText>Projects</HeadingText>
      </div>
      <ClientOnly>
        <div class="flex flex-col items-end gap-4">
          <div class="grid w-full grid-cols-1 md:grid-cols-2">
            <template v-if="status === 'pending'">
              <div>Loading...</div>
            </template>
            <template v-else-if="projects && projects.length">
              <ProjectCard
                v-for="project in projects"
                :key="project.repo"
                :project="project"
              />
            </template>
            <template v-else>
              <div>No projects found.</div>
            </template>
          </div>
        </div>
      </ClientOnly>
    </section>
  </main>
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

const { data: projects, status: status } = useFetch<GithubRepo[]>(
  "https://gh-pinned-repos-tsj7ta5xfhep.deno.dev/?username=0x476569636f",
  {
    lazy: true,
    server: false,
  }
);
</script>

<style></style>
