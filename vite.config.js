import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	esbuild: {
		jsx: 'automatic'
	},
	plugins: [sveltekit()]
};

export default config;
