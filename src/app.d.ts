// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces

declare global {
	namespace App {
		declare module '*&enhanced' {
			import type { Picture } from "@sveltejs/enhanced-img";
			const value: Picture;
			export default value;
		}

		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };
