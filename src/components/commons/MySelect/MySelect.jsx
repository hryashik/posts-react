import React from 'react';
import style from './MySelect.module.css'
function MySelect(props) {
	return (
		<select
			className={style.select}
			defaultValue={'none'}
			onChange={e => props.changeSelect(e.target.value)}
		>
			<option disabled value='none'>Выберите сортировку</option>
			{props.options.map(option =>
				<option value={option.value} key={option.value}>{option.name}</option>
			)}
		</select>
	);
}

export default MySelect;