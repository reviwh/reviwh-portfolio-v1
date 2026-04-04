<script lang="ts">
  import Icon from "@iconify/svelte";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
</script>

<footer class="bg-secondary py-6 px-6 md:px-10">
  <div
    class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"
  >
    <p class="text-gray-300">© 2023 Revi Wardana Putra.</p>
    <button onclick={scrollToTop} aria-label="scroll to top">
      <Icon icon="mdi:arrow-up" class="text-black" width="24" height="24" />
    </button>
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
</style>
