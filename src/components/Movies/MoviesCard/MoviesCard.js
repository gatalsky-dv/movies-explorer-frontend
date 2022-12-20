import React from 'react';

export default function MoviesCard({ email }) {
	
	return (
		
			<article className="card">
				<img src={require('../../../images/33_words_about_design.jpg')} alt="33 слова" className="card__img" />
				<button type="button" className="card__save">Сохранить</button>
				<div className="card__description">
					<h2 className="card__name">33 слова о дизайне</h2>
					<p className="card__time">1ч 17м</p>
				</div>
			</article>
		
	)
}