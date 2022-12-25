import React from 'react';

import Promo from '../Main/Promo/Promo';
import AboutMe from '../Main/AboutMe/AboutMe';
import AboutProject from '../Main/AboutProject/AboutProject';
import Tech from '../Main/Techs/Tech';
import Portfolio from '../Main/Portfolio/Portfolio';
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";

export default function Movies() {
	return (
		<main className="main">
			<SearchForm />
			<MoviesCardList />
		</main>
	)
}