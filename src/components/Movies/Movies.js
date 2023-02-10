import React from 'react';

import HeaderMovies from '../HeaderMovies/HeaderMovies';
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from "../Preloader/Preloader";

export default function Movies({
	                               loggedIn,
	                               preloader,
	                               cards,
	                               setCardsSwitch,
	                               cardsSwitch,
	                               onMovieSearch,
	                               onCardLike,
	                               onCardDelete,
	                               cardInput,
	                               setCardInput,
	                               cardsArray,
	                               saveCards,
	                               cardsOutput,
	                               addCadsOutput,
	                               setCardsOutput,
	                               errorData,
                               }) {

	return (
		<main className="main">
			<HeaderMovies
				// loggedIn={ loggedIn }
			/>
			<SearchForm
				cards={cards}
				setCardsSwitch={setCardsSwitch}
				cardsSwitch={cardsSwitch}
				onMovieSearch={onMovieSearch}
				cardInput={cardInput}
				setCardInput={setCardInput}
			/>
			{preloader &&
				<Preloader isOpen="preloader"/>
			}
			{cardsArray && (
				<MoviesCardList
					cardsSwitch={cardsSwitch}
					cardsArray={cardsArray}
					saveCards={saveCards}
					cardsOutput={cardsOutput}
					setCardsOutput={setCardsOutput}
					addCadsOutput={addCadsOutput}
					onCardLike={onCardLike}
					onCardDelete={onCardDelete}
					errorData={errorData}
					cardButton="card__save_saved"
				/>
			)}
			
			<Footer />
		</main>
	)
}