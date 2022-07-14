import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Post from '../Post/Post';
import style from './PostList.module.css'

function PostList({ posts, deletePost }) {
	return (
		<div className={style.postList}>
			{posts.length ?
				<TransitionGroup>
					{posts.map((post, index) =>
						<CSSTransition
							key={post.id}
							timeout={500}
							classNames="post"
						>
							<Post
								{...post}
								index={index + 1}
								deletePost={deletePost}
							/>
						</CSSTransition>)}
				</TransitionGroup>
				: <h3>Посты не найдены!</h3>}
		</div>

	);
}

export default PostList;