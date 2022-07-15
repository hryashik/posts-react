import React from 'react';
import style from './Comment.module.css'

function Comment({ email, name, body }) {
	return (
		<div className={style.comment}>
			<div className={style.nameWrapper}>
				<h3>{email}</h3>
			</div>
			<div className={style.description}>
				<h4>{name}</h4>
				<p>{body}</p>
			</div>
		</div>
	);
}

export default Comment;