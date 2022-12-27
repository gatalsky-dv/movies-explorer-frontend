import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreButton from "../MoreButton/MoreButton";


export default function MoviesCardList() {
	
	return (
		<>
			<section className="moviescardlist">
				<MoviesCard
					cardClick="card__save_saved"
				/>
				<MoviesCard
					cardClick="card__save_saved"
				/>
				<MoviesCard
					cardClick="card__save_saved"
				/>
				<MoviesCard
					cardClick="card__save_saved"
				/>
				<MoviesCard
					cardClick="card__save_saved"
				/>
				<MoviesCard
					cardClick="card__save_saved"
				/>
				<MoviesCard
					cardClick="card__save_saved"
				/>
				<MoviesCard
					cardClick="card__save_saved"
				/>
				<MoviesCard
					cardClick="card__save_saved"
				/>
				<MoviesCard
					cardClick="card__save_saved"
				/>
				<MoviesCard
					cardClick="card__save_saved"
				/>
				<MoviesCard
					cardClick="card__save_saved"
				/>
			</section>
			<MoreButton />
		</>
		
	
	)
}