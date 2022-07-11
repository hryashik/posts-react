import React, { useState } from 'react';
import './App.css'
import MyInput from './components/commons/MyInput/MyInput';
import MySelect from './components/commons/MySelect/MySelect';
import FormCreatePost from './components/FormCreatePost/FormCreatePost';
import PostList from './components/PostList/PostList';

function App() {
	// ПОСТЫ
	const [posts, setPosts] = useState([
		{ id: 1, title: 'ARARARA', body: 'ZXCSADQWE' },
		{ id: 2, title: 'ABABABABA', body: 'ZXCSADQWExzc' },
		{ id: 3, title: 'React', body: 'Library' },
		{ id: 4, title: 'Vue', body: 'Framework' },
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

	//СЕЛЕКТ
	const [selectedSort, setSelectedSort] = useState('none')
	const options = [
		{ value: 'title', name: 'По названию' },
		{ value: 'body', name: 'По описанию' }
	]
	function sortPosts(sortType) {
		setSelectedSort(sortType)
	}
	// Записываю отсортированные посты сразу в переменную и передаю уже компонентам
	const sortedPosts = [...posts].sort((a, b) => a[selectedSort]?.localeCompare(b[selectedSort]))

	//ПОИСК ИНПУТ
	const [searchQuery, setSearchQuery] = useState('');

	return (
		<div className='App'>
			<FormCreatePost
				formData={formData}
				onChange={onChange}
				addPost={addPost}
			/>
			<div className="sortWrapper">
				<MyInput
					placeholder="Поиск..."
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)} />
				<MySelect
					changeSelect={sortPosts}
					options={options}
					selectedSort={selectedSort}
				/>
			</div>
			<PostList
				posts={sortedPosts}
				deletePost={deletePost}
			/>
		</div>
	);
}

export default App;