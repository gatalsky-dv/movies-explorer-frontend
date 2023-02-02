import React, { useState } from 'react';
import Navigation from "../Navigation/Navigation";
import {Link} from "react-router-dom";

export default function HeaderMovies() {
	
	const [ click, setClick ] = useState(false);
	
	function handleClick() {
		setClick(!click);
	}
	
	function reload() {
		if (window.location.pathname === "/movies") {
			window.location.pathname.reload();
		}
	}
	
	return (
		<header className="headermovies">
			<div className="headermovies__movies">
				<Link to="/" className="logo"></Link>
				<div className="headermovies__links">
					<Link to="/movies" className="headermovies__link">Фильмы</Link>
					<Link to="/saved-movies" className="headermovies__link" onClick={reload}>Сохраненные фильмы</Link>
				</div>
			</div>
			<button type="button" className="headermovies__burger" onClick={handleClick}></button>
			<div className="headermovies__account">
				
				<h3 className="text">Аккаунт</h3>
				<div className="button">
					<Link to="/profile" className="link"></Link>
				</div>
			</div>
			<Navigation isOpen={click} onClose={handleClick} />
		</header>
	)
}