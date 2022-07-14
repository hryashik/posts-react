import { useMemo } from 'react';

const useSortedPosts = (posts, sort) => {
	const sortedPosts = useMemo(() => {
		console.log('get sorted posts')
		if (sort) {
			return [...posts].sort((a, b) => a[sort]?.localeCompare(b[sort]))
		}
		return posts
	}, [posts, sort])
	return sortedPosts
}

export function usePosts(posts, sort, query) {
	const sortedPosts = useSortedPosts(posts, sort);
	const sortedAndFiltredPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
	}, [sortedPosts, query])
	return sortedAndFiltredPosts
}
