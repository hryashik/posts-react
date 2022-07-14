import React, { useMemo, useState } from 'react';
import './App.css'
import FormCreatePost from './components/FormCreatePost/FormCreatePost';
import PostFilter from './components/PostFilter/PostFilter';
import PostList from './components/PostList/PostList';

function App() {
	// ПОСТЫ
	const [posts, setPosts] = useState([
		{ id: 1, title: 'ARARARA', body: 'ZXCSADQWE' },
		{ id: 2, title: 'ABABABABA', body: 'ZXCSADQWExzc' },
		{ id: 3, title: 'React', body: 'Library' },
		{ id: 4, title: 'Vue', body: 'Framework' },
	])
	const [filter, setFilter] = useState({ sort: '', query: '' })

	function addPost(e) {
		e.preventDefault()
		setPosts([...posts, { ...formData, id: Date.now() }])
		setFormData({ title: '', body: '' })
	}
	function deletePost(id) {
		setPosts(posts.filter(post => post.id !== id))
	}

	//ФОРМА
	const [formData, setFormData] = useState({ title: '', body: '' })
	function onChange(newFormData) {
		setFormData(newFormData)
	}

	// Записываю отсортированные посты сразу в переменную и передаю уже компонентам
	const sortedPosts = useMemo(() => {
		console.log('get sorted posts')
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort]?.localeCompare(b[filter.sort]))
		}
		return posts
	}, [posts, filter.sort])

	//Фильтрую отсортированный массив и передаю в компоненту
	const sortedAndFiltredPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
	}, [sortedPosts, filter.query])

	return (
		<div className='App'>
			<FormCreatePost
				formData={formData}
				onChange={onChange}
				addPost={addPost}
			/>
			<PostFilter filter={filter} setFilter={setFilter} />
			<PostList
				posts={sortedAndFiltredPosts}
				deletePost={deletePost}
			/>
		</div>
	);
}

export default App;