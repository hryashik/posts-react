import React from 'react';
import style from './FormCreatePost.module.css'
import MyButton from '../commons/MyButton/MyButton';
import MyInput from '../commons/MyInput/MyInput';

function FormCreatePost({ formData, onChange, addPost }) {
	return (
		<form className={style.form} onSubmit={addPost}>
			<MyInput value={formData.title} onChange={e => onChange({ ...formData, title: e.target.value })} />
			<MyInput value={formData.body} onChange={e => onChange({ ...formData, body: e.target.value })} />
			<MyButton>Создать пост</MyButton>
		</form>
	);
}

export default FormCreatePost;