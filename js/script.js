/*==================== toggle icon navbar ====================*/
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const handleClick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
menuIcon.addEventListener("click", handleClick);

/*==================== scroll sections active link ====================*/
const sections = document.querySelectorAll("section");
const navLink = document.querySelectorAll("header nav a");

const handleScroll = () => {
  sections.forEach((sec) => {
    const top = window.scrollY;
    const offset = sec.offsetTop - 150;
    const height = sec.offsetHeight;
    const id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
      });
    }
  });
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

window.addEventListener("scroll", handleScroll);

/*==================== scroll reveal ====================*/
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
  interval: 100,
});

ScrollReveal().reveal(".home-content, .heading");
ScrollReveal().reveal(
  ".hero-image, .skills-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

/*==================== typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: [
    "Student",
    "Junior Web Developer",
    "Software Enginner",
    "Bangkit Cohort 2023",
  ],
  typeSpeed: 100,
  backSpeed: 150,
  backDelay: 1000,
  loop: true,
});
