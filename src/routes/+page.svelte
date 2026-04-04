<script lang="ts">
  import { onMount } from "svelte";
  import Header from "../components/Header.svelte";
  import Home from "../components/Home.svelte";
  import About from "../components/About.svelte";
  import Skills from "../components/Skills.svelte";
  import Portfolio from "../components/Portfolio.svelte";
  import Contact from "../components/Contact.svelte";
  import Footer from "../components/Footer.svelte";

  export let data: {
    title: string;
    description: string;
    canonical: string;
    heroImage: string;
  };

  $: schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Revi Wardana Putra",
    url: data.canonical,
    sameAs: [
      "https://github.com/reviwh",
      "https://linkedin.com/in/revi-wardana-putra-5b207a229",
    ],
    jobTitle: "Software Developer",
    image: data.heroImage,
  };

  let isMenuOpen = false;
  let isSticky = false;
  let activeSection = "home";

  const SECTION_OFFSET = 150;
  const STICKY_THRESHOLD = 80;

  const setActiveLink = (id: string) => {
    activeSection = id;
  };

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const handleNavClick = () => {
    isMenuOpen = false;
  };

  onMount(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const sections = document.querySelectorAll("section");
          const scroll = window.scrollY;

          sections.forEach((section) => {
            const offset = section.offsetTop - SECTION_OFFSET;
            const height = section.offsetHeight;

            if (scroll >= offset && scroll < offset + height) {
              setActiveLink(section.id);
            }
          });

          isSticky = window.scrollY > STICKY_THRESHOLD;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.description} />
  <meta
    name="keywords"
    content="reviwh, portfolio, web developer, svelte, javascript, kotlin, flutter"
  />
  <meta name="author" content="Revi Wardana Putra" />
  <meta name="robots" content="index, follow" />

  <link rel="canonical" href={data.canonical} />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Revi Wardana Putra Portfolio" />
  <meta property="og:title" content={data.title} />
  <meta property="og:description" content={data.description} />
  <meta property="og:url" content={data.canonical} />
  <meta property="og:image" content={data.heroImage} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={data.title} />
  <meta name="twitter:description" content={data.description} />
  <meta name="twitter:image" content={data.heroImage} />

  <script type="application/ld+json">
    {JSON.stringify(schema)}
  </script>
</svelte:head>

<div class="bg-bg text-white min-h-screen">
  <Header
    {isMenuOpen}
    {isSticky}
    {activeSection}
    on:toggleMenu={toggleMenu}
    on:navClick={handleNavClick}
  />

  <main class="pt-24">
    <Home />
    <About />
    <Skills />
    <Portfolio />
    <Contact />
  </main>

  <Footer />
</div>