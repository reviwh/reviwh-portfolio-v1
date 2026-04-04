export const prerender = true;

export function load() {
    const baseUrl = "https://portfolio-reviwh.vercel.app";

    return {
        title: "Revi Wardana Putra | Portfolio",
        description:
            "Passionate software developer building modern web experiences with SvelteKit, Tailwind CSS, and clean UI.",
        canonical: `${baseUrl}/`,
        heroImage: `${baseUrl}/images/hero.webp`,
    };
}
