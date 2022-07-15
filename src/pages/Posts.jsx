import React, { useEffect, useState } from 'react';
import '../App.css'
import { ServiceApi } from '../components/API/serviceApi';
import MyButton from '../components/commons/MyButton/MyButton';
import MyModal from '../components/commons/MyModal/MyModal';
import Pagination from '../components/commons/Pagination/Pagination';
import PreLoader from '../components/commons/Preloader/Preloader';
import FormCreatePost from '../components/FormCreatePost/FormCreatePost';
import { usePosts } from '../components/hooks/usePosts';
import PostFilter from '../components/PostFilter/PostFilter';
import PostList from '../components/PostList/PostList';

function Posts() {
	const [posts, setPosts] = useState([])
	const [visible, setVisible] = useState(false);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [formData, setFormData] = useState({ title: '', body: '' });
	const [isLoading, setIsLoading] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1)
	const limitPosts = 10;
	const pagesArray = []
	for (let i = 1; i <= totalPages; i++) {
		pagesArray.push(i)
	}
	useEffect(() => {
		console.log('fetch posts')
		fetchPosts()
	}, [currentPage]);

	async function fetchPosts() {
		setIsLoading(true)
		const response = await ServiceApi.getPosts(currentPage)
		setPosts(response.data)
		const totalCount = response.headers['x-total-count']
		setTotalPages(Math.ceil(totalCount / limitPosts))
		setIsLoading(false)
	}

	function addPost(e) {
		e.preventDefault()
		setPosts([...posts, { ...formData, id: Date.now() }])
		setFormData({ title: '', body: '' })
		setVisible(false)
	}

	function deletePost(id) {
		setPosts(posts.filter(post => post.id !== id))
	}

	function onChange(newFormData) {
		setFormData(newFormData)
	}


	//Вызываю кастомный хук и записываю отсортированный массив в перемнную, чтобы потом передать в компоненту
	const sortedAndFiltredPosts = usePosts(posts, filter.sort, filter.query);

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
				<Pagination
					pagesArray={pagesArray}
					currentPage={currentPage}
					clickOnPage={setCurrentPage} />
			</div>
		</div>

	);
}

export default Posts;