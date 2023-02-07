import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreButton from "../MoreButton/MoreButton";
import {DATA_ERROR, NOTHING_FOUND, SHORT_FILM} from "../../../utils/constants";
import Preloader from "../../Preloader/Preloader";

export default function MoviesCardList({
	                                       cardsSwitch,
	                                       cardsSavedSwitch,
	                                       cardsArray,
	                                       saveCards,
	                                       cardsOutput,
	                                       setCardsOutput,
	                                       addCadsOutput,
	                                       onCardLike,
	                                       onCardDelete,
	                                       cardButton,
	                                       errorData
                                       }) {
	
	const movieArrayList = cardsArray.filter((movie) => {
		if (window.location.pathname === "/movies") {
			if (!cardsSwitch || (cardsSwitch && movie.duration <= SHORT_FILM)) {
				return movie;
			}
		} else {
			if (!cardsSavedSwitch || (cardsSavedSwitch && movie.duration <= SHORT_FILM)) {
				return movie;
			}
		}
	});
	
	console.log('Что тут? ', cardsOutput);
	
	return (
		<>
			{movieArrayList.length === 0 &&
				<p className="moviescardlist__text">{NOTHING_FOUND}</p>
			}
			{errorData &&
				<>
					<p className="moviescardlist__text">{DATA_ERROR}</p>
					<Preloader isOpen="preloader"/>
				</>
			}
			<section className="moviescardlist">
				{movieArrayList.slice(0, cardsOutput).map((card) => {
					return (
						<MoviesCard
							key={card.id}
							card={card}
							onCardLike={onCardLike}
							onCardDelete={onCardDelete}
							saveCards={saveCards}
							cardButton={cardButton}
						/>
					)
				})}
			</section>
			{movieArrayList.length > cardsOutput &&
				<MoreButton
					cardsOutput={cardsOutput}
					addCadsOutput={addCadsOutput}
					setCardsOutput={setCardsOutput}
				/>
			}
		</>
	
	)
}