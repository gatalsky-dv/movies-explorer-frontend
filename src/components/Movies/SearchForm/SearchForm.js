import React from 'react';

export default function SearchForm({ email }) {
	
	return (
		
		<section className="search">
			<form className="search__form">
				<button type="button" className="search__button-left" ></button>
				<input className="search__film" type="text" placeholder="Фильм" />
				<button className="search__button"></button>
			</form>
			<div className="line line__search"></div>
			<div className="search__check">
				<img src={require('../../../images/smalltumb.svg')} alt="Переключатель" className="search__checkbox"/>
				<p className="search__title">Короткометражки</p>
			</div>
			
		</section>
	
	)
}