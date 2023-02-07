import React, { useState, useEffect } from 'react';
import { BFM_URL } from '../../../utils/constants';

export default function MoviesCard({
	                                   card,
	                                   onCardLike,
		                                 onCardDelete,
	                                   saveCards,
	                                   cardButton,
                                   }) {
	
	const [ save, setSave ] = useState(false);
	
	const image = window.location.pathname === "/movies" ? BFM_URL + card.image.url : card.image;
	const duration = time(card.duration);

	useEffect(() => {
		saveCards.map((movie) => {
			if (movie.movieId === card.id) {
				setSave(true);
			}
		});
	}, []);

	function handleClick() {
		if (!save) {
			setSave(true);
			onCardLike(card);
		} else {
			setSave(false);
			onCardDelete(saveCards.find((movie) => movie.movieId === card.id));
		}
	}
	
	function handleClickDeleteCard() {
		setSave(false);
		onCardDelete(card);
	}
	
	function time(min) {
		return (Math.trunc(min / 60) + 'ч ' + (min % 60) + 'м')
	}
	
	return (
		
			<article className="card">
				<a href={card.trailerLink} target="_blank" rel="noreferrer">
					<img src={image} alt={card.nameRU} className="card__img" />
				</a>
				{ window.location.pathname === "/movies" ? (
					<button
						type="button"
						className={`card__save ${save === true ? cardButton : ""}`}
						onClick={handleClick}
						// disabled={save}
					>
						{save === false ? "Сохранить" : "" }
					</button>
				) : (
					<button
						type="button"
						className={`card__save ${cardButton}`}
						onClick={handleClickDeleteCard}
					></button>
				)
				}
				<div className="card__description">
					<h2 className="card__name">{card.nameRU}</h2>
					<p className="card__time">{duration}</p>
				</div>
			</article>
		
	)
}