import React from 'react';
import style from './MyModal.module.css'


function MyModal({ children, visible, setVisible }) {
	function changeVisible(event) {
		event.stopPropagation()
		setVisible(false)
	}
	const rootStyles = [style.modalWrapper]
	if (visible) {
		rootStyles.push(style.active)
	}
	return (
		<div className={rootStyles.join(' ')}
			onClick={e => changeVisible(e)}>
			<div className={style.modalContent} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
}

export default MyModal;