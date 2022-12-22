import React from 'react';
import {Link} from "react-router-dom";

export default function Register() {
	
	return (
		
		<section className="register">
			<header className="register__header">
				<Link to="/" className="header__logo header__logo_login"></Link>
				<h1 className="register__welcome">Добро пожаловать!</h1>
			</header>
			<form className="register__form">
				<div className="register__info">
					<label className="register__text">Имя</label>
					<input className="register__input" required id="name" name="name" type="text" placeholder="Имя" value="Дмитрий"/>
				</div>
				<div className="register__info">
					<label className="register__text">E-mail</label>
					<input className="register__input" required id="email" name="email" type="email" placeholder="Email" value="pochta@yandex.ru" />
				</div>
				<div className="register__info">
					<label className="register__text">Пароль</label>
					<input className="register__password" required id="password" name="password" type="password" value="****" />
					<label className="register__error">Что-то пошло не так...</label>
				</div>
			</form>
			<div className="register__button">
				<Link to="/profile" className="register__signup" type="button">Зарегестрироваться</Link>
				<div className="register__block">
					<p className="register__question">Уже зарегестрированны?</p>
					<Link to="/signin" className="register__signin">Войти</Link>
				</div>

			</div>
		
		</section>
	
	)
}