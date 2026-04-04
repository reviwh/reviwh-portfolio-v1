<script lang="ts">
  import Icon from "@iconify/svelte";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";

  let name = $state("");
  let email = $state("");
  let subject = $state("");
  let message = $state("");
  let showAlert = $state(false);
  let alertMessage = $state("");
  let alertType = $state<"success" | "error">("success");
  let isSubmitting = $state(false);

  const validateDomain = () => {
    const allowedDomain = import.meta.env.VITE_HOSTNAME;
    return allowedDomain === window.location.hostname;
  };

  const handleSubmit = async (event: Event) => {
    event.preventDefault();

    isSubmitting = true;

    if (!validateDomain()) {
      alertType = "error";
      alertMessage = "Form submission is not allowed from this domain.";
      showAlert = true;
      isSubmitting = false;
      setTimeout(() => (showAlert = false), 5000);
      return;
    }

    const formData = new FormData(event.target as HTMLFormElement);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    if (formData.get("website")) return;

    try {
      formData.delete("website");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        alertType = "success";
        alertMessage = "Message sent successfully!";
        name = email = subject = message = "";
        showAlert = true;
      } else {
        alertType = "error";
        alertMessage = "Failed to send message. Please try again.";
        showAlert = true;
      }

      window.hcaptcha.reset();
      isSubmitting = false;
      setTimeout(() => (showAlert = false), 5000);
    } catch (error) {
      alertType = "error";
      alertMessage =
        "An error occurred while sending the message. Please try again.";
      showAlert = true;
      window.hcaptcha.reset();
      isSubmitting = false;
      setTimeout(() => (showAlert = false), 5000);
      return;
    }
  };

  onMount(() => {
    const script = document.createElement("script");
    script.src = `https://web3forms.com/client/script.js`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  });
</script>

<section id="contact" class="px-6 md:px-10 py-28 bg-background">
  <div class="max-w-4xl mx-auto p-8 md:p-12">
    <h2 class="text-4xl md:text-5xl font-bold text-center text-white mb-8">
      Contact <span class="text-primary">Me</span>
    </h2>
    <form onsubmit={handleSubmit} class="space-y-3">
      <input
        type="text"
        name="website"
        style="display:none"
        tabindex="-1"
        autocomplete="off"
      />

      <input placeholder="Name" name="name" bind:value={name} required />
      <input
        type="email"
        placeholder="Email Address"
        name="email"
        bind:value={email}
        required
      />
      <input
        placeholder="Email Subject"
        name="subject"
        bind:value={subject}
        required
      />
      <textarea
        rows="6"
        placeholder="Your Message"
        name="message"
        bind:value={message}
        required
      ></textarea>
      <div class="w-full flex items-center justify-center">
        <div
          class="h-captcha"
          data-captcha="true"
          data-lang="en"
          data-theme="dark"
        ></div>
      </div>
      <div class="flex w-full pt-2 items-center justify-center">
        <button type="submit" class="btn-main" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
    {#if showAlert}
      <div
        class="alert"
        class:alert-success={alertType === "success"}
        class:alert-error={alertType === "error"}
        in:fly={{ y: -20, duration: 800 }}
        out:fade={{ duration: 800 }}
      >
        <div class="flex items-center gap-3">
          {#if alertType === "success"}
            <Icon icon="mdi:check-circle" class="w-5 h-5" />
          {:else}
            <Icon icon="mdi:close-circle" class="w-5 h-5" />
          {/if}
          <p class="text-sm font-medium">{alertMessage}</p>
        </div>
      </div>
    {/if}
  </div>
</section>

<style lang="postcss">
  @reference "#layout.css";

  .alert {
    @apply fixed top-5 right-5 z-50 px-5 py-3 rounded-xl backdrop-blur-sm transition-all duration-300;
  }

  .alert-success {
    @apply bg-green-950 outline-1 outline-green-500 text-green-500;
    box-shadow: 0 0 1rem var(--color-green-500);
  }
  .alert-error {
    @apply bg-red-950 outline-1 outline-red-500 text-red-500;
    box-shadow: 0 0 1rem var(--color-red-500);
  }

  input,
  textarea {
    @apply w-full p-4 rounded-xl bg-secondary border border-background/50 text-white focus:outline-none focus:ring-2 focus:ring-primary transition;
  }

  input::placeholder,
  textarea::placeholder {
    @apply text-gray-400;
  }
  .btn-main:disabled {
    @apply cursor-wait;
  }
</style>
