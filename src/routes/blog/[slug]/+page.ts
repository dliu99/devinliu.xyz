import { error } from '@sveltejs/kit';
import { posts } from '$lib/blog';

// 'auto' so the build still passes when there are no published posts to crawl
export const prerender = 'auto';

export function load({ params }) {
	const post = posts.find((post) => post.slug === params.slug);
	if (!post) error(404, 'Post not found');
	return { post };
}
