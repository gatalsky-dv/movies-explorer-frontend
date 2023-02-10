import React from 'react';

export default function MoreButton({ cardsOutput, addCadsOutput, setCardsOutput }) {
	
	function clickMore() {
		return setCardsOutput(cardsOutput + addCadsOutput);
	}
	
	return (
		
		<section className="more">
			<button type="button" className="more__button" onClick={ clickMore }>Еще</button>
		</section>
	
	)
}