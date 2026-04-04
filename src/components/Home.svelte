<script lang="ts">
  import HeroImage from "$lib/assets/images/hero.webp?enhanced";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  let typedText = $state("");
  let typedIndex = $state(0);
  let currentStringIndex = $state(0);
  let isCursorMoving = $state(false);
  let isDeleting = $state(false);

  const strings = [
    "Fresh Graduated",
    "Software Engineer",
    "Junior Web Developer",
    "Bangkit Cohort 2023",
  ];
  const typeSpeed = 100;
  const backSpeed = 150;
  const backDelay = 2000;

  const type = () => {
    const currentString = strings[currentStringIndex];

    if (!isDeleting) {
      if (typedIndex < currentString.length) {
        isCursorMoving = true;
        typedText = currentString.substring(0, typedIndex + 1);
        typedIndex += 1;
        setTimeout(type, typeSpeed);
      } else {
        isDeleting = true;
        isCursorMoving = false;
        setTimeout(type, backDelay);
      }
    } else {
      if (typedIndex > 0) {
        isCursorMoving = true;
        typedText = currentString.substring(0, typedIndex - 1);
        typedIndex -= 1;
        setTimeout(type, backSpeed);
      } else {
        isDeleting = false;
        isCursorMoving = false;
        currentStringIndex = (currentStringIndex + 1) % strings.length;
        setTimeout(type, typeSpeed);
      }
    }
  };

  onMount(() => {
    type();
  });
</script>

<section
  id="home"
  class="min-h-screen px-6 md:px-10 py-28 flex flex-col md:flex-row items-center gap-10"
>
  <div class="flex-1 text-center md:text-left">
    <h2 class="text-3xl md:text-4xl font-semibold text-white">
      Hello, It's me
    </h2>
    <h1 class="text-5xl md:text-6xl font-bold mt-3">Revi Wardana Putra</h1>
    <h2 class="text-2xl md:text-3xl mt-4">
      And I'm a <span
        class="text-primary {isCursorMoving
          ? 'typed-text'
          : 'typed-text-blinking'}">{typedText}</span
      >
    </h2>
    <p
      class="mt-6 text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl"
    >
      I am an IT enthusiast with high ambition in developing myself in the field
      of information technology.
    </p>
    <div class="mt-6 flex justify-center md:justify-start gap-3">
      <a
        href="https://web.facebook.com/reviwh"
        aria-label="facebook"
        class="social-button"
      >
        <Icon icon="mdi:facebook" width="20" height="20" />
      </a>
      <a
        href="https://www.instagram.com/reviwh_"
        aria-label="instagram"
        class="social-button"
      >
        <Icon icon="mdi:instagram" width="20" height="20" />
      </a>
      <a
        href="https://www.linkedin.com/in/revi-wardana-putra-5b207a229/"
        aria-label="linkedin"
        class="social-button"
      >
        <Icon icon="mdi:linkedin" width="20" height="20" />
      </a>
      <a
        href="https://github.com/reviwh"
        aria-label="github"
        class="social-button"
      >
        <Icon icon="mdi:github" width="20" height="20" />
      </a>
      <a
        href="mailto:reviwh2@gmail.com"
        aria-label="email"
        class="social-button"
      >
        <Icon icon="mdi:email" width="20" height="20" />
      </a>
    </div>
    <a
      href="https://www.cakeresume.com/pdf/s--5FWHNx0VmieyRIpcVqo2AQ--/OAAwV.pdf"
      class="btn-main mt-8"
    >
      Download CV
    </a>
  </div>

  <div class="flex-1 flex justify-center md:justify-end">
    <enhanced:img
      src={HeroImage}
      alt="Hero"
      sizes="(max-width: 768px) 288px, 420px"
      class="w-72 md:w-96 aspect-square object-contain animate-float"
      loading="lazy"
    />
  </div>
</section>

<style lang="postcss">
  @reference "#layout.css";

  img {
    filter: drop-shadow(0 0 1rem var(--color-primary));
  }

  .animate-float {
    animation: floatImage 4s ease-in-out infinite;
  }

  .typed-text,
  .typed-text-blinking {
    font-family: "JetBrains Mono", monospace;
    display: inline-block;
    margin-left: 8px;
    text-shadow: 0 0 1rem var(--color-primary);
  }

  .typed-text::after,
  .typed-text-blinking::after {
    content: "|";
    display: inline-block;
  }

  .typed-text-blinking::after {
    animation: blinkCursor 0.7s steps(1) infinite;
  }

  @keyframes floatImage {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-2rem);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes blinkCursor {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .social-button {
    @apply w-11 h-11 flex items-center justify-center border border-primary rounded-full text-primary hover:bg-primary hover:text-background transition;
  }

  .social-button:hover {
    @apply bg-primary text-background;
    box-shadow: 0 0 1rem var(--color-primary);
  }
</style>
