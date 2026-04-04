<script>
  import { createEventDispatcher } from "svelte";
  import Icon from "@iconify/svelte";

  export let isMenuOpen = false;
  export let isSticky = false;
  export let activeSection = "home";

  const dispatch = createEventDispatcher();

  const toggleMenu = () => dispatch("toggleMenu");
  const handleNavClick = () => dispatch("navClick");
</script>

<header
  class="fixed w-full z-50 transition-shadow duration-300"
  class:shadow-lg={isSticky}
>
  <div
    class="mx-auto px-6 md:px-10 flex items-center justify-between h-20 bg-bg bg-opacity-80 backdrop-blur-sm"
  >
    <a href="#home" class="text-2xl md:text-3xl font-bold text-white"
      >Revi Wardana Putra</a
    >

    <button
      class="block md:hidden text-white p-2"
      aria-label="Toggle menu"
      aria-expanded={isMenuOpen}
      on:click={toggleMenu}
    >
      <Icon icon="mdi:menu" width="28" height="28" />
    </button>

    <nav class="hidden md:flex gap-8 items-center" aria-label="Main">
      <a
        href="#home"
        class="text-lg hover:text-main"
        class:text-main={activeSection === "home"}
        on:click={handleNavClick}>Home</a
      >
      <a
        href="#about"
        class="text-lg hover:text-main"
        class:text-main={activeSection === "about"}
        on:click={handleNavClick}>About</a
      >
      <a
        href="#skills"
        class="text-lg hover:text-main"
        class:text-main={activeSection === "skills"}
        on:click={handleNavClick}>Skills</a
      >
      <a
        href="#portfolio"
        class="text-lg hover:text-main"
        class:text-main={activeSection === "portfolio"}
        on:click={handleNavClick}>Portfolio</a
      >
      <a
        href="#contact"
        class="text-lg hover:text-main"
        class:text-main={activeSection === "contact"}
        on:click={handleNavClick}>Contact</a
      >
    </nav>

    {#if isMenuOpen}
      <div
        class="md:hidden fixed inset-0 bg-bg/95 flex flex-col items-center justify-center gap-8 text-2xl"
      >
        <a href="#home" on:click={handleNavClick} class="text-white">Home</a>
        <a href="#about" on:click={handleNavClick} class="text-white">About</a>
        <a href="#skills" on:click={handleNavClick} class="text-white">Skills</a
        >
        <a href="#portfolio" on:click={handleNavClick} class="text-white"
          >Portfolio</a
        >
        <a href="#contact" on:click={handleNavClick} class="text-white"
          >Contact</a
        >
      </div>
    {/if}
  </div>
</header>

<style lang="postcss">
  nav a {
    @apply transition-all duration-300;
  }
  nav a:hover {
    @apply text-main;
    text-shadow: 0 0 0.5rem var(--color-main);
  }
</style>
