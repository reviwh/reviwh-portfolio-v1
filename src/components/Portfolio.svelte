<script>
  const projects = [
    {
      id: 1,
      image: "/images/rasaku.gif",
      title: "Mobile (Kotlin)",
      description:
        "RASAKU is an app that will utilize classification techniques to identify various traditional dishes, providing users with detailed information such as the food's name, historical background, and recipes",
    },
    {
      id: 2,
      image: "/images/animanga.webp",
      title: "Mobile (Kotlin)",
      description: "Anime database app that retrieve data from an Jikan API.",
    },
    {
      id: 3,
      image: "/images/baron.webp",
      title: "Desktop (Flutter)",
      description: "Reservation app for canteen of university.",
    },
    {
      id: 4,
      image: "/images/mind.webp",
      title: "Mobile Game (Unity)",
      description: "Platformer game that explores the theme of anxiety.",
    },
    {
      id: 5,
      image: "/images/animania.webp",
      title: "Web (PHP)",
      description: "Anime streaming web app using Laravel.",
    },
    {
      id: 6,
      image: "/images/seabook.webp",
      title: "More Projects",
      description: "+8 more projects",
      isMore: true,
    },
  ];
</script>

<section id="portfolio" class="bg-second px-6 md:px-10 py-28">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-4xl md:text-5xl font-bold text-center text-white mb-12">
      Latest <span class="text-main">Project</span>
    </h2>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each projects as project (project.id)}
        <article class="portfolio">
          <img
            src={project.image}
            alt={project.title}
            class="portfolio-image"
            loading="lazy"
          />
          {#if project.isMore}
            <div
              class="portfolio-description flex flex-col justify-center items-center text-center gap-3"
            >
              <h3 class="text-6xl font-bold">+8</h3>
            </div>
          {:else}
            <div class="portfolio-description">
              <h3 class="text-2xl font-bold">{project.title}</h3>
              <p class="text-sm font-semibold">{project.description}</p>
            </div>
          {/if}
        </article>
      {/each}
    </div>
  </div>
</section>

<style lang="postcss">
  .portfolio {
    @apply relative rounded-2xl overflow-hidden shadow-lg border border-bg/50;
    cursor: pointer;
  }

  .portfolio:hover {
    @apply outline-2 outline -outline-offset-2 outline-main;
    box-shadow: 0 0 1rem var(--color-main);
  }

  .portfolio-image {
    @apply w-full h-56 rounded-2xl object-cover transition-all duration-500;
  }

  .portfolio-description {
    @apply absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 text-white translate-y-full transition-all duration-300 p-6 flex flex-col justify-center items-center text-center gap-3;
    text-shadow:
      0 0 0.5rem var(--color-main),
      0 0 1rem var(--color-main);
  }

  .portfolio:hover .portfolio-image {
    @apply scale-110;
    filter: blur(2px);
  }

  .portfolio:hover .portfolio-description {
    @apply translate-y-0;
  }
</style>
