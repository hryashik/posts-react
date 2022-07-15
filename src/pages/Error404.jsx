import React from 'react';

function Error404() {
	return (
		<div style={{ textAlign: 'center', marginTop: '100px' }}>
			<h3 style={{ color: 'red', fontSize: '40px' }}>404</h3>
			<p style={{ fontSize: '20px' }}>Please use next endpoints: <strong>'/' '/posts' '/about'</strong></p>
		</div>
	);
}

export default Error404;