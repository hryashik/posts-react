import React, { useState } from 'react';
import './App.css'
import FormCreatePost from './components/FormCreatePost/FormCreatePost';
import PostList from './components/PostList/PostList';

function App() {
	// ПОСТЫ
	const [posts, setPosts] = useState([
		{ id: 1, title: 'ARARARA', body: 'ZXCSADQWE' },
		{ id: 2, title: 'ABABABABA', body: 'ZXCSADQWExzc' },
	])
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
	return (
		<div className='App'>
			<FormCreatePost formData={formData}
				onChange={onChange}
				addPost={addPost} />
			<PostList posts={posts} deletePost={deletePost} />
		</div>
	);
}

export default App;