<script lang="ts">
  import HeroImage from "$lib/assets/images/hero.webp?w=500;360;280&enhanced";
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  const socialLinks = [
    {
      href: "https://web.facebook.com/reviwh",
      ariaLabel: "facebook",
      icon: "mdi:facebook",
    },
    {
      href: "https://www.instagram.com/reviwh_",
      ariaLabel: "instagram",
      icon: "mdi:instagram",
    },
    {
      href: "https://www.linkedin.com/in/revi-wardana-putra-5b207a229/",
      ariaLabel: "linkedin",
      icon: "mdi:linkedin",
    },
    {
      href: "https://github.com/reviwh",
      ariaLabel: "github",
      icon: "mdi:github",
    },
    {
      href: "mailto:reviwh2@gmailcom",
      ariaLabel: "email",
      icon: "mdi:email",
    },
  ];

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

<section id="home" class="bg-background">
  <div
    class="wrapper flex flex-col-reverse md:flex-row items-center md:justify-between gap-6"
  >
    <div class="flex-1 text-center md:text-left">
      <h2 class="text-xl md:text-3xl font-semibold text-white">
        Hello, It's me
      </h2>
      <h1 class="text-3xl md:text-5xl font-bold mt-3">Revi Wardana Putra</h1>
      <h2 class="text-lg md:text-2xl mt-4">
        and I'm a <span
          class="text-primary {isCursorMoving
            ? 'typed-text'
            : 'typed-text-blinking'}">{typedText}</span
        >
      </h2>
      <p
        class="mt-6 text-base md:text-lg text-gray-200 leading-relaxed max-w-2xl"
      >
        I am an IT enthusiast with high ambition in developing myself in the
        field of information technology.
      </p>
      <div class="mt-6 flex justify-center md:justify-start gap-3">
        {#each socialLinks as socialLink (socialLink.ariaLabel)}
          <a
            href={socialLink.href}
            aria-label={socialLink.ariaLabel}
            class="social-button"
            target="_blank"
            rel="external noopener noreferrer"
          >
            <Icon icon={socialLink.icon} width="20" height="20" />
          </a>
        {/each}
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
        sizes="(min-width: 1024px) 500px, (min-width: 768px) 360px, (min-width: 640px) 500px, 100vw"
        class="w-125 md:w-[35vw] md:max-w-125 aspect-square object-contain animate-float"
        loading="lazy"
      />
    </div>
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
