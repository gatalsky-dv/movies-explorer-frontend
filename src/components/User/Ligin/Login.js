import React from 'react';

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
				<button className="login__signup" type="button">Войти</button>
				<div className="login__block">
					<p className="login__question">Еще не зарегестрированны?</p>
					<a href="/" className="login__signin">Регистрация</a>
				</div>
			
			</div>
		
		</section>
	
	)
}