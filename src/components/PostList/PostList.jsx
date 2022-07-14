import React from 'react';
import Post from '../Post/Post';
import style from './PostList.module.css'

function PostList({ posts, deletePost }) {
	return (
		<div className={style.postList}>
			{posts.length ?
				<div>
					{posts.map((post, index) =>
						<Post
							{...post}
							key={post.id}
							index={index + 1}
							deletePost={deletePost}
						/>)}
				</div>
				: <h3>Посты не найдены!</h3>}
		</div>

	);
}

export default PostList;