/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};

/*==================== scroll reveal ====================*/
ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".hero-image, .skills-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });
/*==================== typed js ====================*/
const typed = new Typed(".multiple-text", {
  strings: ["Student"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*==================== light mode ====================*/
iconTheme = document.querySelector("#icon-theme");
body = document.querySelector("body");
iconTheme.onclick = () => {
  body.classList.toggle("light-mode");
  iconTheme.classList.toggle("bxs-sun");
  toggleImage();
};

function toggleImage() {
  const heroImage = document.querySelector(".hero-image img");
  const aboutImage = document.querySelector(".about-img img");

  if (heroImage.src.endsWith("images/hero.png")) {
    heroImage.src = "images/hero-light.png";
    aboutImage.src = "images/about-light.png";
    console.log(heroImage.src);
  } else {
    heroImage.src = "images/hero.png";
    aboutImage.src = "images/about.png";
  }
}

/*==================== light mode ====================*/
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzyVNBDK2apf7wWHrgg85aeytdc8fiLl-7GPznPOAcvpW6NCUcEO0UFdVbNQWVhkaET_A/exec";
const form = document.forms["contact-form"];
const msg = document.querySelector("#msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => {
        msg.style.opacity = "1";
      }, 500);
      setTimeout(() => {
        msg.innerHTML = "";
      }, 4000);
      setTimeout(() => {
        msg.style.opacity = "0";
      }, 3500);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
