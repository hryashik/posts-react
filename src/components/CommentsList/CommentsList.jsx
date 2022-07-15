import React from 'react';
import Comment from '../Comment/Comment';

function CommentsList({ commentsArray }) {
	return (
		<div>
			{commentsArray.map(commentData =>
				<Comment key={commentData.id} {...commentData} />
			)}
		</div>
	);
}

export default CommentsList;