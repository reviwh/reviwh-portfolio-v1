<script lang="ts">
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let showScrollButton = $state(false);
  let startFloatingAnimation = $state(false);
  let scrollTimeout: ReturnType<typeof setTimeout>;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  onMount(() => {
    const handleScroll = () => {
      showScrollButton = window.scrollY > 300;
      clearTimeout(scrollTimeout);
      if (showScrollButton) {
        scrollTimeout = setTimeout(() => (startFloatingAnimation = true), 500);
      } else {
        startFloatingAnimation = false;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  });
</script>

<footer class="bg-secondary py-6 px-6 md:px-10">
  <div class="wrapper flex justify-between items-center gap-4">
    <p class="text-gray-300">© 2023 Revi Wardana Putra.</p>
    {#if showScrollButton}
      <button
        onclick={scrollToTop}
        aria-label="scroll to top"
        class="fixed right-5 bottom-5"
        class:animate-float={startFloatingAnimation}
        in:fly={{ y: 20, duration: 500 }}
        out:fly={{ y: 20, duration: 500 }}
      >
        <Icon icon="mdi:arrow-up" class="text-black" width="24" height="24" />
      </button>
    {/if}
  </div>
</footer>

<style lang="postcss">
  @reference "#layout.css";

  button {
    @apply w-12 h-12 inline-flex items-center justify-center bg-primary rounded-full transition-all cursor-pointer;
  }

  button:hover {
    @apply bg-primary-hover;
    box-shadow: 0 0 1rem var(--color-primary);
  }

  .animate-float {
    animation: float 1.5s ease-in-out infinite;
  }

  @keyframes float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }
</style>
