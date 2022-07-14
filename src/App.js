import React, { useEffect, useState } from 'react';
import './App.css'
import { ServiceApi } from './components/API/serviceApi';
import MyButton from './components/commons/MyButton/MyButton';
import MyModal from './components/commons/MyModal/MyModal';
import PreLoader from './components/commons/Preloader/Preloader';
import FormCreatePost from './components/FormCreatePost/FormCreatePost';
import { usePosts } from './components/hooks/usePosts';
import PostFilter from './components/PostFilter/PostFilter';
import PostList from './components/PostList/PostList';

function App() {
	function fetchPosts() {
		setIsLoading(true)
		setTimeout(async () => {
			const posts = await ServiceApi.getPosts()
			setPosts(posts)
			setIsLoading(false)
		}, 1500)

	}
	// ПОСТЫ
	useEffect(() => {
		fetchPosts()
	}, []);
	const [posts, setPosts] = useState([])

	function addPost(e) {
		e.preventDefault()
		setPosts([...posts, { ...formData, id: Date.now() }])
		setFormData({ title: '', body: '' })
		setVisible(false)
	}

	function deletePost(id) {
		setPosts(posts.filter(post => post.id !== id))
	}

	//ФОРМА
	const [formData, setFormData] = useState({ title: '', body: '' })
	function onChange(newFormData) {
		setFormData(newFormData)
	}

	//Фильтр
	const [filter, setFilter] = useState({ sort: '', query: '' })

	//Вызываю кастомный хук и записываю отсортированный массив в перемнную, чтобы потом передать в компоненту
	const sortedAndFiltredPosts = usePosts(posts, filter.sort, filter.query);

	//Модальное окно
	const [visible, setVisible] = useState(false);

	//Переключатель фетчинга постов
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div className={'App'}>
			<MyModal visible={visible} setVisible={setVisible}>
				<FormCreatePost
					formData={formData}
					onChange={onChange}
					addPost={addPost}
				/>
			</MyModal>
			<div className='AppContent'>
				<MyButton
					style={{ marginBottom: '10px' }}
					onClick={() => setVisible(true)}
				>
					Создать пост
				</MyButton>
				<PostFilter filter={filter} setFilter={setFilter} />
				{isLoading ? <div className='preloader'><PreLoader /></div>
					: <PostList
						posts={sortedAndFiltredPosts}
						deletePost={deletePost}
					/>
				}
			</div>
		</div>

	);
}

export default App;