<script lang="ts">
  import AboutImage from "$lib/assets/images/about.webp??w=500;360;280&enhanced";
</script>

<section id="about" class="bg-secondary">
  <div
    class="wrapper flex flex-col md:flex-row items-center justify-center gap-0 md:gap-10"
  >
    <enhanced:img
      src={AboutImage}
      alt="About me"
      sizes="(min-width: 1024px) 500px, (min-width: 768px) 360px, (min-width: 640px) 500px, 100vw"
      class="hidden md:block w-[35vw] max-w-125 aspect-square object-contain"
      loading="lazy"
    />
    <div class="flex-1 text-white">
      <h2 class="text-center md:text-left text-3xl md:text-5xl font-bold mb-8">
        About <span class="text-primary">Me</span>
      </h2>
      <p
        class="text-base text-justify md:text-lg leading-relaxed text-gray-200"
      >
        As an aspiring Information Technology professional currently studying at
        Padang State Polytechnic, I bring a diverse skill set that encompasses
        graphic design, computer networking, relational databases, web
        programming, and mobile programming.
        <br />
        With four months of hands-on experience as an intern technician at PT Aplikanusa
        Lintasarta, I honed my troubleshooting skills and gained valuable insights
        into the practical aspects of IT.
        <br />
        I pride myself on being a quick learnerwith a strong ability to adapt to
        team dynamics. My time management skills allow me to ensure efficient and
        effective project delivery. Eager to contribute my technical expertise and
        collaborative spirit to the ever-evolving field of Information Technology.
        <br />
        Let's connect and explore the possibilities!
      </p>
    </div>
  </div>
</section>

<style lang="postcss">
  @reference "#layout.css";

  img {
    filter: drop-shadow(0 0 1rem var(--color-primary));
  }
</style>
