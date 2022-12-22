import React, {useState} from 'react';

export default function MoviesCard( { cardClick }) {
	
	const [ save, setSave ] = useState(true);
	
	function handleClickSave() {
		setSave(!save);
	}
	
	return (
		
			<article className="card">
				<img src={require('../../../images/33_words_about_design.jpg')} alt="33 слова" className="card__img" />
				<button type="button" className={`card__save ${save === false ? cardClick : ""}`} onClick={handleClickSave}>{save === true ? "Сохранить" : "" }</button>
				{/*<button type="button" className={saved}></button>*/}
				<div className="card__description">
					<h2 className="card__name">33 слова о дизайне</h2>
					<p className="card__time">1ч 17м</p>
				</div>
			</article>
		
	)
}