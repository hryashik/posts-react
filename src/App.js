import React from 'react';
import './App.css'
import Posts from './pages/Posts';
import { Routes, Route, Navigate } from 'react-router-dom'
import Error404 from './pages/Error404';
import About from './pages/About';
import Navbar from './components/Navbar/Navbar';
import PostPage from './pages/PostPage';

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Navigate to="/posts" />}></Route>
				<Route path='/posts' element={<Posts />} />
				<Route path='/posts/:id' element={<PostPage />} />
				<Route path='/about' element={<About />} />
				<Route path='/*' element={<Error404 />} />
			</Routes>
		</div>
	)
}

export default App;