import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation({ isOpen, onClose }) {
	
	return (
		
		<nav className={`navigation ${isOpen ? "navigation_open" : ""}`} onClick={ onClose }>
			<button className="navigation__close" onClick={ onClose }></button>
			<Link to="/" className="navigation__menu">Главная</Link>
			<Link to="/movies" className="navigation__menu">Фильмы</Link>
			// ребут добавить
			<Link to="/saved-movies" className="navigation__menu">Сохраненные фильмы</Link>
			<div className="navigation__account">
				<h3 className="text">Аккаунт</h3>
				<div className="button">
					<Link to="/profile" className="link"></Link>
				</div>
			</div>
			
		</nav>
	
	)
}