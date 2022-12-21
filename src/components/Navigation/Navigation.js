import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
	
	return (
		
		<section className="navigation">
			<a href="/" className="navigation__close"></a>
			<h2 className="navigation__menu">Главная</h2>
			<h2 className="navigation__menu">Фильмы</h2>
			<h2 className="navigation__menu">Сохраненные фильмы</h2>
			<div className="navigation__account">
				<h3 className="navigation__text">Аккаунт</h3>
				{/*<Link to={"/"}></Link>*/}
				<div className="navigation__button">
					<a href="/" className="navigation__link"></a>
				</div>
				
			</div>
			
		</section>
	
	)
}