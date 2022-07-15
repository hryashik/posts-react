import React from 'react';
import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<nav className={style.wrapper}>
			<Link to="/about">About</Link>
			<Link to="/posts">Posts</Link>
		</nav>
	);
}

export default Navbar;