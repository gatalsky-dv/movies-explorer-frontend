import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {ERROR_LOGIN_TEXT} from "../../../utils/constants";

export default function Login({ onLogin, errorData }) {
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const resetForm = () => {
		setEmail('');
		setPassword('');
	}
	
	function handleSubmit(e) {
		e.preventDefault();
		if (!email || !password) {
			return;
		}
		onLogin({ email, password })
			.then(resetForm)
	};
	
	return (
		
		<section className="login">
			<header className="login__header">
				<Link to="/" className="logo logo_login"></Link>
				<h1 className="login__welcome">Рады видеть!</h1>
			</header>
			{errorData &&
				<p className="moviescardlist__text">{ERROR_LOGIN_TEXT}</p>
			}
			<form className="login__form"  onSubmit={handleSubmit}>
				<div className="login__info">
					<label className="login__text">E-mail</label>
					<input className="login__input"
					  required
					  id="email-input"
					  name="email"
					  type="email"
					  placeholder="Email"
					  minLength="2"
					  maxLength="40"
					  value={email}
					  onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="login__info">
					<label className="login__text">Пароль</label>
					<input className="login__password"
					  required
					  id="password-input"
					  name="password"
					  type="password"
					  placeholder="Пароль"
					  value={password}
					  minLength="2"
					  maxLength="200"
					  onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				
				<div className="login__button">
					<button
						className="login__signup"
						type="submit"
					>Войти
					</button>
					<div className="login__block">
						<p className="login__question">Еще не зарегестрированны?</p>
						<Link to="/signup" className="login__signin">Регистрация</Link>
					</div>
				</div>
			</form>
		
		</section>
	
	)
}