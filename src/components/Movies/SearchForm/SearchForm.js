import React, {useState} from 'react';
import Preloader from "../../Preloader/Preloader";

export default function SearchForm() {
	
	const [ search, setSearch ] = useState(false);
	const [ check, setCheck ] = useState(false);
	
	function handleClickSearch() {
		setSearch(!search);
	}
	
	function handleClickCheck() {
		setCheck(!check);
	}
	
	return (
		
		<section className="search">
			<form className="search__form">
				<div className="search__glass" ></div>
				<input className="search__film" type="text" placeholder="Фильм" required/>
				<button type="button" className="search__button" onClick={handleClickSearch}></button>
			</form>
			<div className="line line_search"></div>
			<div className="search__check">
				
				<img src={check === false ? require('../../../images/smalltumb.svg') : require('../../../images/smalltumboff.svg')} onClick={handleClickCheck} alt="Переключатель" className="search__checkbox"/>
				{/*<input type="checkbox" className="search__checkbox" checked />*/}
				<label className="search__title">Короткометражки</label>
			</div>
			<Preloader isOpen={search} onClose={handleClickSearch} />
		</section>
	
	)
}