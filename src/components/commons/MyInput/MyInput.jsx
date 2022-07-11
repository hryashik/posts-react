import React from 'react';
import style from './MyInput.module.css';

function MyInput(props) {
	return (
		<input {...props} className={style.inp} />
	);
}

export default MyInput;