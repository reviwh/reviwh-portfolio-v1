<script lang="ts">
  import Icon from "@iconify/svelte";
  import { fade, fly } from "svelte/transition";

  const {
    isMenuOpen = false,
    isSticky = false,
    activeSection = "home",
    onToggleMenu,
    onNavClick,
  } = $props<{
    isMenuOpen?: boolean;
    isSticky?: boolean;
    activeSection?: string;
    onToggleMenu?: () => void;
    onNavClick?: () => void;
  }>();

  const toggleMenu = () => onToggleMenu?.();
  const handleNavClick = () => onNavClick?.();
  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "contact", label: "Contact" },
  ];
</script>

<header
  class="fixed w-full z-50 transition-shadow duration-300"
  class:shadow-lg={isSticky}
>
  <div
    class="z-20 fixed top-0 left-0 w-screen h-16 md:h-20 px-6 py-3 md:px-10 bg-background md:bg-background/80 md:backdrop-blur-sm"
  >
    <div class="wrapper flex items-center justify-between">
      <a href="#home" class="text-xl md:text-3xl font-bold text-white"
        >Revi Wardana Putra</a
      >

      <button
        class="block md:hidden text-white"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
        onclick={toggleMenu}
      >
        {#if isMenuOpen}
          <Icon icon="mdi:close" width="28" height="28" />
        {:else}
          <Icon icon="mdi:menu" width="28" height="28" />
        {/if}
      </button>

      <nav class="hidden md:flex gap-8 items-center" aria-label="Main">
        {#each navLinks as navLink (navLink.id)}
          <a
            href={"#" + navLink.id}
            class="text-lg {activeSection === navLink.id
              ? 'text-primary'
              : 'text-white'} hover:text-primary"
            onclick={handleNavClick}>{navLink.label}</a
          >
        {/each}
      </nav>
    </div>
  </div>
  {#if isMenuOpen}
    <div
      class="z-10 md:hidden fixed top-16 left-0 w-full py-4 bg-secondary flex flex-col items-center justify-center gap-2 shadow-md shadow-black/20"
      transition:fly={{ y: -64, duration: 200 }}
    >
      {#each navLinks as navLink (navLink.id)}
        <a
          href={"#" + navLink.id}
          class="text-base {activeSection === navLink.id
            ? 'text-primary'
            : 'text-white'} hover:text-primary"
          onclick={handleNavClick}>{navLink.label}</a
        >
      {/each}
    </div>
  {/if}
</header>

<style lang="postcss">
  @reference "#layout.css";
  nav a {
    @apply transition-all duration-300;
  }
  nav a:hover {
    @apply text-primary;
    text-shadow: 0 0 0.5rem var(--color-primary);
  }
</style>
