import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile() {
	
	return (
		
		<section className="profile">
			<h1 className="profile__greeting">Привет, Димон!</h1>
			<form className="profile__form">
				<div className="profile__info">
					<label className="profile__text">Имя</label>
					<input className="profile__text profile__text_input" required id="name" name="name" type="text" placeholder="Имя" value="Дмитрий"/>
				</div>
				<div className="line profile__line"></div>
				<div className="profile__info">
					<label className="profile__text">E-mail</label>
					<input className="profile__text profile__text_input" required id="email" name="email" type="email" placeholder="Email" value="pochta@yandex.ru" />
				</div>
			</form>
			<div className="profile__button">
				<Link to="/movies" className="profile__edit" type="button">Редактировать</Link>
				<Link to="/" className="profile__edit profile__edit_exit">Выйти из аккаунта</Link>
			</div>
		
		</section>
	
	)
}