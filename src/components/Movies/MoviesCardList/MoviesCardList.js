import React from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import MoreButton from "../MoreButton/MoreButton";


export default function MoviesCardList() {
	
	return (
		<>
			<section className="moviescardlist">
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
				<MoviesCard />
			</section>
			<MoreButton />
		</>
		
	
	)
}