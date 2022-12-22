import React from 'react';

export default function SearchForm() {
	
	return (
		
		<section className="search">
			<form className="search__form">
				<div className="search__glass" ></div>
				<input className="search__film" type="text" placeholder="Фильм" />
				<button type="button" className="search__button"></button>
			</form>
			<div className="line line__search"></div>
			<div className="search__check">
				<img src={require('../../../images/smalltumb.svg')} alt="Переключатель" className="search__checkbox"/>
				<p className="search__title">Короткометражки</p>
			</div>
			
		</section>
	
	)
}