import React, { useState } from 'react';
import {DATA_ERROR, INPUT_MOVIE} from "../../../utils/constants";

export default function SearchForm({
	                                   cards,
	                                   setCardsSwitch,
	                                   cardsSwitch,
	                                   onMovieSearch,
	                                   cardInput,
	                                   setCardInput,
                                   }) {

	const [inputValid, setInputValid] = useState(true);
	
	
	const handleClickSearch = (e) => {
		e.preventDefault();
		if (cardInput) {
			onMovieSearch(cards);
		} else {
			setInputValid(false);
			setTimeout(()=>{
				setInputValid(true);
			}, 4000);
			// onMovieSearch(cards);
		}
	}
	
	const handleInput = (e) => {
		setCardInput(e.target.value);
	}
	
	const handleClickCheck = () => {
		setCardsSwitch(!cardsSwitch);
		localStorage.setItem('cardsSwitch', JSON.stringify(!cardsSwitch));
	}
	
	return (
		<section className="search">
			{!inputValid &&
				<p className="moviescardlist__text">{INPUT_MOVIE}</p>
			}
			<form className="search__form">
				<div className="search__glass" ></div>
				<input
					className="search__film"
					name="search__film"
					type="text"
					value={cardInput}
					placeholder="Фильмы"
					onChange={handleInput}
					required
				/>
				<button type="button" className="search__button" onClick={handleClickSearch}></button>
			</form>
			<div className="line line_search"></div>
			<div className="search__check">
					<img src={cardsSwitch ? require('../../../images/smalltumb.svg') : require('../../../images/smalltumboff.svg')} onClick={handleClickCheck} alt="Переключатель" className="search__checkbox"/>
					<label className="search__title">Короткометражки</label>
			</div>
		</section>
	)
}