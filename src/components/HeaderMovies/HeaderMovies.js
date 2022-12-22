import React, { useState } from 'react';
import Navigation from "../Navigation/Navigation";
import {Link} from "react-router-dom";

export default function HeaderMovies() {
	
	const [ click, setClick ] = useState(false);
	
	function handleClick() {
		setClick(!click);
	}
	
	return (
		
		<header className="headermovies">
			
			<div className="headermovies__movies">
				<Link to="/" className="header__logo"></Link>
				<div className="headermovies__links">
					<Link to="/movies" className="headermovies__link">Фильмы</Link>
					<Link to="/saved-movies" className="headermovies__link">Сохраненные фильмы</Link>
				</div>
			</div>
			<button type="button" className="headermovies__burger" onClick={handleClick}></button>
			<div className="headermovies__account">
				
				<h3 className="navigation__text navigation__text_active">Аккаунт</h3>
				<div className="navigation__button navigation__button_active">
					<Link to="/profile" className="navigation__link navigation__link_active"></Link>
				</div>
			</div>
			<Navigation isOpen={click} onClose={handleClick} />
		</header>

	)
}