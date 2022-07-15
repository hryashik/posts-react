import React, { useEffect, useState } from 'react';
import './App.css'
import Posts from './pages/Posts';
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404';
import About from './pages/About';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Navigate to="/posts" />} />
			<Route path='/posts' element={<Posts />} />
			<Route path='/about' element={<About />} />
			<Route path='/*' element={<Error404 />} />
		</Routes>
	)
}

export default App;