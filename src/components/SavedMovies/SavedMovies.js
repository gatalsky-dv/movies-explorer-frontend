import React from 'react';
import MoviesCard from "../Movies/MoviesCard/MoviesCard";

export default function SavedMovies() {
	
	return (
		<>
			<section className="savedmovies">
				<MoviesCard
					cardClick="card__save_delete"
				/>
				<MoviesCard
					cardClick="card__save_delete"
				/>
				<MoviesCard
					cardClick="card__save_delete"
				/>
			</section>
		</>
	
	
	)
}