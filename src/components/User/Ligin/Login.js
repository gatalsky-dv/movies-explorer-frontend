import React from 'react';
import { Link } from "react-router-dom";

export default function Login() {
	
	return (
		
		<section className="login">
			<header className="login__header">
				<a href="/" className="header__logo header__logo_login" />
				<h1 className="login__welcome">Рады видеть!</h1>
			</header>
			<form className="login__form">
				<div className="login__info">
					<label className="login__text">E-mail</label>
					<input className="login__input" required id="email" name="email" type="email" placeholder="Email" value="pochta@yandex.ru" />
				</div>
				<div className="login__info">
					<label className="login__text">Пароль</label>
					<input className="login__password" required id="password" name="password" type="password" value="" />
				</div>
			</form>
			<div className="login__button">
				<Link to="/movies" className="login__signup" type="button">Войти</Link>
				<div className="login__block">
					<p className="login__question">Еще не зарегестрированны?</p>
					<Link to="/signup" className="login__signin">Регистрация</Link>
				</div>
			
			</div>
		
		</section>
	
	)
}