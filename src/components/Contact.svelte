<script>
  let name = "";
  let email = "";
  let subject = "";
  let message = "";
  let submitMessage = "";
  let showMessage = false;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("access_key", "YOUR_WEB3FORMS_KEY");
    formData.append("Name", name);
    formData.append("Email Address", email);
    formData.append("Email Subject", subject);
    formData.append("Message", message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        submitMessage = "Message sent successfully!";
        showMessage = true;
        name = "";
        email = "";
        subject = "";
        message = "";
        setTimeout(() => (showMessage = false), 3000);
      } else {
        submitMessage = "Error sending message. Please try again.";
        showMessage = true;
      }
    } catch (error) {
      submitMessage = "Error sending message. Please try again.";
      showMessage = true;
    }
  };
</script>

<section id="contact" class="px-6 md:px-10 py-28 bg-bg">
  <div class="max-w-4xl mx-auto p-8 md:p-12">
    <h2 class="text-4xl md:text-5xl font-bold text-center text-white mb-8">
      Contact <span class="text-main">Me</span>
    </h2>
    <form on:submit={handleSubmit} class="space-y-3">
      <input placeholder="Name" bind:value={name} required />
      <input
        type="email"
        placeholder="Email Address"
        bind:value={email}
        required
      />
      <input placeholder="Email Subject" bind:value={subject} required />
      <textarea
        rows="6"
        placeholder="Your Message"
        bind:value={message}
        required
      ></textarea>
      <div class="flex w-full pt-2 items-center justify-center">
        <button type="submit" class="btn-main">Send Message</button>
      </div>
    </form>
    {#if showMessage}
      <p class="mt-4 text-center text-main">{submitMessage}</p>
    {/if}
  </div>
</section>

<style lang="postcss">
  input,
  textarea {
    @apply w-full p-4 rounded-xl bg-second border border-bg/50 text-white focus:outline-none focus:ring-2 focus:ring-main transition;
  }

  input::placeholder,
  textarea::placeholder {
    @apply text-gray-400;
  }
</style>
