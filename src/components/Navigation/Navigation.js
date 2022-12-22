import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
	
	return (
		
		<nav className="navigation">
			<a href="/" className="navigation__close"></a>
			<Link to="/" className="navigation__menu">Главная</Link>
			<Link to="movies" className="navigation__menu">Фильмы</Link>
			<Link to="saved-movies" className="navigation__menu">Сохраненные фильмы</Link>
			<div className="navigation__account">
				<h3 className="navigation__text">Аккаунт</h3>
				<div className="navigation__button">
					<a href="/" className="navigation__link"></a>
				</div>
				
			</div>
			
		</nav>
	
	)
}