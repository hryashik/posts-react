import React from 'react';
import style from './Pagination.module.css'

function Pagination({ pagesArray, currentPage, clickOnPage }) {
	function rootStyle(page) {
		if (page === currentPage) {
			return [style.page, style.active].join(' ')
		}
		return style.page
	}
	return (
		<div className={style.pageWrapper}>
			{pagesArray.map(page =>
				<span
					onClick={() => clickOnPage(page)}
					key={page}
					className={rootStyle(page)}
				>
					{page}
				</span>
			)}
		</div>
	);
}

export default Pagination;