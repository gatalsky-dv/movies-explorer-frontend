import React from 'react';

import Promo from '../Main/Promo/Promo';
import AboutMe from '../Main/AboutMe/AboutMe';
import AboutProject from '../Main/AboutProject/AboutProject';
import Tech from '../Main/Techs/Tech';
import Portfolio from '../Main/Portfolio/Portfolio';

export default function Main() {
	return (
		<>
			<Promo />
			<AboutProject />
			<Tech />
			<AboutMe />
			<Portfolio />
		</>
	)
}