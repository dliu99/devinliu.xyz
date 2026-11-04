import { fileURLToPath } from 'node:url';
import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';

const options = {
	extensions: ['.md'],
	rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]]
};
const pages = mdsvex(options);
// only posts get the layout, it resolves the images Obsidian attaches
const posts = mdsvex({
	...options,
	layout: fileURLToPath(new URL('./src/lib/BlogPost.svelte', import.meta.url))
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		{
			name: 'mdsvex',
			markup: (input) =>
				(input.filename?.includes('/src/content/blog/') ? posts : pages).markup(input)
		}
	],
	kit: {
		adapter: adapter()
	}
};

export default config;
