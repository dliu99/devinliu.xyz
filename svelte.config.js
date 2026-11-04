import { fileURLToPath } from 'node:url';
import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import rehypeExternalLinks from 'rehype-external-links';

const options = {
	extensions: ['.md'],
	rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }]]
};

const escapes = { '<': '&lt;', '{': '&#123;', '}': '&#125;' };
const escape = (text) => text.replace(/[<{}]/g, (char) => escapes[char]);

// posts are plain markdown, so nothing in them should compile as svelte
function plainMarkdown() {
	const walk = (node, parent) => {
		if (node.type === 'text') {
			node.value = escape(node.value);
		} else if (node.type === 'image' && node.alt) {
			node.alt = escape(node.alt);
		} else if (
			['html', 'svelteBlock', 'svelteTag'].includes(node.type) &&
			!node.value.startsWith('<!--')
		) {
			const text = { type: 'text', value: escape(node.value) };
			if (parent.type === 'root') {
				Object.assign(node, { type: 'paragraph', children: [text] });
				delete node.value;
			} else {
				Object.assign(node, text);
			}
			return;
		}
		for (const child of node.children ?? []) walk(child, node);
	};
	return (tree) => walk(tree);
}

const pages = mdsvex(options);
// only posts get the layout, it resolves the images Obsidian attaches
const posts = mdsvex({
	...options,
	remarkPlugins: [plainMarkdown],
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
