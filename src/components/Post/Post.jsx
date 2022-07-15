import React from 'react';
import MyButton from '../commons/MyButton/MyButton';
import style from './Post.module.css';

function Post(props) {
	return (
		<div className={style.post}>
			<div>
				<strong>{props.id}. {props.title}</strong>
				<div>{props.body}</div>
			</div>
			<MyButton onClick={() => props.deletePost(props.id)}>Удалить</MyButton>
		</div>
	);
}

export default Post;