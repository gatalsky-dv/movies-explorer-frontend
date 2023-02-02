import React from 'react';

import HeaderMovies from '../../HeaderMovies/HeaderMovies';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../../Footer/Footer';
import Preloader from "../../Preloader/Preloader";

export default function SavedMovies({
	                                    loggedIn,
	                                    preloader,
	                                    saveCards,
	                                    cardsSwitch,
	                                    setCardsSwitch,
	                                    cardInputSaved,
	                                    setCardInputSaved,
	                                    cardsArraySaved,
	                                    cardsOutput,
	                                    setCardsOutput,
	                                    addCadsOutput,
	                                    onSaveMovieSearch,
	                                    onCardLike,
	                                    onCardDelete,
	                                    errorData,
	                                    saveCardsVisible,
                                    }) {
	
	return (
		<main className="main">
			<HeaderMovies
				loggedIn={ loggedIn }
			/>
			<SearchForm
				cards={saveCards}
				cardsSwitch={cardsSwitch}
				setCardsSwitch={setCardsSwitch}
				cardInput={cardInputSaved}
				setCardInput={setCardInputSaved}
				onMovieSearch={onSaveMovieSearch}
			/>
			{preloader &&
				<Preloader isOpen="preloader"/>
			}
				<MoviesCardList
					saveCards={saveCards}
					cardsArray={saveCardsVisible ?  cardsArraySaved : saveCards}
					cardsOutput={cardsOutput}
					addCadsOutput={addCadsOutput}
					setCardsOutput={setCardsOutput}
					cardsSwitch={cardsSwitch}
					onCardLike={onCardLike}
					onCardDelete={onCardDelete}
					errorData={errorData}
					cardButton="card__save_delete"
				/>
			<Footer />
		</main>
	)
}