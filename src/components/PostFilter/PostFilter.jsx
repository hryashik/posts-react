import React from 'react';
import MyInput from '../commons/MyInput/MyInput';
import MySelect from '../commons/MySelect/MySelect';
import style from './PostFilter.module.css'

function PostFilter({ filter, setFilter }) {
	const options = [
		{ value: 'title', name: 'По названию' },
		{ value: 'body', name: 'По описанию' }
	]

	return (
		<div className={style.sortWrapper}>
			<MyInput
				placeholder="Поиск по названию..."
				value={filter.query}
				onChange={e => setFilter({ ...filter, query: e.target.value })} />
			<MySelect
				changeSelect={sortType => setFilter({ ...filter, sort: sortType })}
				options={options}
				selectedSort={filter.sort}
			/>
		</div>
	);
}

export default PostFilter;