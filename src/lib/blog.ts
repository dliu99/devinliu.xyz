import type { Component } from 'svelte';

type PostModule = {
	default: Component;
	metadata?: { title?: string; date?: string | Date; description?: string };
};

const modules = import.meta.glob<PostModule>('/src/content/blog/*.md', { eager: true });

// a note without a date is a draft
export const posts = Object.entries(modules)
	.filter(([, post]) => post.metadata?.date)
	.map(([path, post]) => {
		const filename = path.split('/').pop()!.replace(/\.md$/, '');
		return {
			slug: filename
				.toLowerCase()
				.replace(/[^a-z0-9]+/g, '-')
				.replace(/^-|-$/g, ''),
			title: post.metadata!.title ?? filename,
			date: new Date(post.metadata!.date!),
			description: post.metadata!.description,
			content: post.default
		};
	})
	.sort((a, b) => b.date.getTime() - a.date.getTime());

export function formatDate(date: Date) {
	return date
		.toLocaleDateString('en-AU', {
			day: 'numeric',
			month: 'short',
			year: 'numeric',
			timeZone: 'UTC'
		})
		.toUpperCase();
}
