import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation({ isOpen, onClose }) {
	
	return (
		
		<nav className={`navigation ${isOpen ? "navigation_open" : ""}`} onClick={ onClose }>
			<button className="navigation__close" onClick={ onClose }></button>
			<Link to="/" className="navigation__menu">Главная</Link>
			<Link to="/movies" className="navigation__menu">Фильмы</Link>
			<Link to="/saved-movies" className="navigation__menu">Сохраненные фильмы</Link>
			<div className="navigation__account">
				<h3 className="navigation__text">Аккаунт</h3>
				<div className="navigation__button">
					<Link href="/profile" className="navigation__link"></Link>
				</div>
			</div>
			
		</nav>
	
	)
}