<script>
  import RasakuImage from "$lib/assets/images/rasaku.gif?w=430&enhanced";
  import AnimangaImage from "$lib/assets/images/animanga.webp?w=430&enhanced";
  import BaronImage from "$lib/assets/images/baron.webp?w=430&enhanced";
  import MindImage from "$lib/assets/images/mind.webp?w=430&enhanced";
  import AnimanImage from "$lib/assets/images/animania.webp?w=430&enhanced";
  import SeabookImage from "$lib/assets/images/seabook.webp?w=430&enhanced";

  const projects = [
    {
      id: 1,
      image: RasakuImage,
      title: "Mobile (Kotlin)",
      description:
        "RASAKU is a classification-based app for recognizing traditional dishes and delivering their names, history, and recipes.",
    },
    {
      id: 2,
      image: AnimangaImage,
      title: "Mobile (Kotlin)",
      description: "Anime database app that retrieve data from an Jikan API.",
    },
    {
      id: 3,
      image: BaronImage,
      title: "Desktop (Flutter)",
      description: "Reservation app for canteen of university.",
    },
    {
      id: 4,
      image: MindImage,
      title: "Mobile Game (Unity)",
      description: "Platformer game that explores the theme of anxiety.",
    },
    {
      id: 5,
      image: AnimanImage,
      title: "Web (PHP)",
      description: "Anime streaming web app using Laravel.",
    },
    {
      id: 6,
      image: SeabookImage,
      title: "More Projects",
      description: "+8 more projects",
      isMore: true,
    },
  ];
</script>

<section id="portfolio" class="bg-secondary">
  <div class="wrapper">
    <h2
      class="text-4xl md:text-5xl font-bold text-center text-white mb-8 md:mb-16"
    >
      Latest <span class="text-primary">Project</span>
    </h2>
    <div class="w-full grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {#each projects as project (project.id)}
        <article class="portfolio">
          <enhanced:img
            src={project.image}
            alt={project.title}
            sizes="(min-width: 640px) 430px, 100vw"
            class="portfolio-image"
            loading="lazy"
          />
          {#if project.isMore}
            <div
              class="portfolio-description flex flex-col justify-center items-center text-center gap-3"
            >
              <h3 class="text-6xl font-semibold">+8</h3>
            </div>
          {:else}
            <div class="portfolio-description">
              <h3 class="text-2xl font-semibold">{project.title}</h3>
              <p class="text-base">{project.description}</p>
            </div>
          {/if}
        </article>
      {/each}
    </div>
  </div>
</section>

<style lang="postcss">
  @reference "#layout.css";

  .portfolio {
    @apply relative rounded-2xl overflow-hidden shadow-lg border border-background/50;
    aspect-ratio: 1.5;
    cursor: pointer;
  }

  .portfolio:hover {
    @apply outline -outline-offset-2 outline-primary;
    box-shadow: 0 0 1rem var(--color-primary);
  }

  .portfolio-image {
    @apply w-full h-full rounded-2xl object-cover transition-all duration-500;
    aspect-ratio: 1.5;
  }

  .portfolio-description {
    @apply absolute inset-0 bg-linear-to-t from-black/80 to-black/0 text-white translate-y-full transition-all duration-300 p-6 flex flex-col justify-center items-center text-center gap-3;
    text-shadow:
      0 0 0.5rem var(--color-primary),
      0 0 1rem var(--color-primary);
  }

  .portfolio:hover .portfolio-image {
    @apply scale-110;
    filter: blur(2px);
  }

  .portfolio:hover .portfolio-description {
    @apply translate-y-0;
  }
</style>
