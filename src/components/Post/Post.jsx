import React from 'react';
import MyButton from '../commons/MyButton/MyButton';
import style from './Post.module.css';
import { useNavigate } from 'react-router-dom'

function Post(props) {
	const navigate = useNavigate();
	return (
		<div className={style.post}>
			<div>
				<strong>{props.id}. {props.title}</strong>
				<div>{props.body}</div>
			</div>
			<div className={style.btns__wrapper}>

			</div>
			<MyButton style={{ marginRight: '5px' }} onClick={() => navigate('/posts/' + props.id)}>Открыть</MyButton>
			<MyButton onClick={() => props.deletePost(props.id)}>Удалить</MyButton>
		</div>
	);
}

export default Post;