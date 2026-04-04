<script lang="ts">
  import Icon from "@iconify/svelte";

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
    class="mx-auto px-6 md:px-10 flex items-center justify-between h-20 bg-background bg-opacity-80 backdrop-blur-sm"
  >
    <a href="#home" class="text-2xl md:text-3xl font-bold text-white"
      >Revi Wardana Putra</a
    >

    <button
      class="block md:hidden text-white p-2"
      aria-label="Toggle menu"
      aria-expanded={isMenuOpen}
      onclick={toggleMenu}
    >
      <Icon icon="mdi:menu" width="28" height="28" />
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

    {#if isMenuOpen}
      <div
        class="md:hidden fixed inset-0 bg-background/95 flex flex-col items-center justify-center gap-8 text-2xl"
      >
        {#each navLinks as navLink (navLink.id)}
          <a
            href={"#" + navLink.id}
            class="text-lg {activeSection === navLink.id
              ? 'text-primary'
              : 'text-white'} hover:text-primary"
            onclick={handleNavClick}>{navLink.label}</a
          >
        {/each}
      </div>
    {/if}
  </div>
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
