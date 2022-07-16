import React, { useEffect, useState } from 'react';
import style from './PostPage.module.css'
import { useParams, useNavigate } from 'react-router-dom'
import { ServiceApi } from '../components/API/serviceApi';
import CommentsList from '../components/CommentsList/CommentsList';

function PostPage() {
	const navigate = useNavigate()
	const params = useParams().id
	const [postId, setPostId] = useState(params);
	const [comments, setComments] = useState('')

	useEffect(() => {
		console.log('UEF PARAMS OTRABOTAL')
		fetchComments(params)
	}, [params]);

	async function fetchComments(id) {
		const response = await ServiceApi.getComments(id)
		setComments([...response.data])
	}
	console.log(comments)
	return (
		<div className={style.pageWrapper}>
			<span
				onClick={() => navigate(-1)}
				className={style.btnBack}
			>Вернуться
			</span>
			<div className={style.pageContent}>
				<h3 className={style.title}>Пост №{postId}</h3>
				{comments && <CommentsList commentsArray={comments} />}
			</div>
		</div>
	);
}

export default PostPage;