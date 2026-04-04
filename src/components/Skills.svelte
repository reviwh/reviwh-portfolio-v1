<script>
  import Icon from "@iconify/svelte";

  const skills = [
    {
      id: 0,
      title: "Web Development",
      icon: "mdi:code-braces",
      primary: "HTML, CSS, PHP, Javascript",
      details: "Laravel, Vue.js, Next.js, Express.js, Bootstrap, Tailwind CSS",
    },
    {
      id: 1,
      title: "Mobile Development",
      icon: "mdi:android",
      primary: "Java, Kotlin",
      details: "Android Studio, Jetpack Compose, Material Design 3",
    },
    {
      id: 2,
      title: "Database",
      icon: "mdi:database",
      primary: "MySQL, MongoDB",
      details: "Prisma ORM, Mongoose ORM",
    },
    {
      id: 3,
      title: "Graphic Design",
      icon: "mdi:palette",
      primary: "Adobe Illustrator, Figma",
      details: "",
    },
  ];
</script>

<section id="skills" class="bg-background py-28 px-6 md:px-10">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl md:text-5xl text-center font-bold text-white mb-16">
      Obtained <span class="text-primary">Skills</span>
    </h2>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {#each skills as skill (skill.id)}
        <article
          class="border border-background/50 rounded-2xl bg-secondary p-6 transition-all transform"
        >
          <div
            class="h-16 w-16 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-5"
          >
            <Icon icon={skill.icon} width="30" height="30" />
          </div>
          <h3 class="text-2xl font-semibold text-white mb-2">{skill.title}</h3>
          <p class="text-base text-gray-200 font-medium">{skill.primary}</p>
          {#if skill.details}
            <p class="text-sm text-gray-400 mt-2">{skill.details}</p>
          {/if}
        </article>
      {/each}
    </div>
  </div>
</section>

<style lang="postcss">
  @reference "#layout.css";
  article:hover {
    @apply border-primary;
    cursor: pointer;
    box-shadow: 0 0 1rem var(--color-primary);
    transform: translateY(-8px);
  }
</style>
