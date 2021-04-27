const preprocess = require("svelte-preprocess");
const { mdsvex } = require("mdsvex");
const mdsvexConfig = require("./mdsvex.config.cjs");
/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig),
	],
	extensions: [".svelte", ...mdsvexConfig.extensions],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    files: {
      assets: 'static'
    }
	}
};
