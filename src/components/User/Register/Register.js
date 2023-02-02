import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Preloader from "../../Preloader/Preloader";
import { Validation } from "../../../utils/Validation";

export default function Register({ onRegister, preloader, text }) {
	const { values, handleChange, errors, isValid } = Validation();
	const [inputDisabled, setInputDisabled] = useState(false);
	
	function handleSubmit(e) {
		e.preventDefault();
		onRegister(values.name, values.email, values.password);
	};

	return (
		
		<section className="register">
			{preloader && <Preloader />}
			<header className="register__header">
				<Link to="/" className="logo logo_login"></Link>
				<h1 className="register__welcome">Добро пожаловать!</h1>
			</header>
			<form className="register__form" onSubmit={handleSubmit}>
				<div className="register__info">
					<label className="register__text">Имя</label>
					<input
						className="register__input"
					  required
					  id="name-input"
					  name="name"
					  type="text"
					  placeholder="Имя"
					  minLength="2"
					  maxLength="40"
					  pattern="[A-Za-zА-Яа-я\s]{1,20}$"
						disabled={ inputDisabled && "disabled" }
					  onChange={ handleChange }
					/>
				</div>
				<div className="register__info">
					<label className="register__text">E-mail</label>
					<input
						className="register__input"
					  required
					  id="email-input"
					  name="email"
					  type="email"
					  placeholder="Email"
					  minLength="2"
					  maxLength="40"
						pattern="[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,20}$"
						disabled={ inputDisabled && "disabled" }
					  onChange={ handleChange }
					/>
				</div>
				<div className="register__info">
					<label className="register__text">Пароль</label>
					<input
						className="register__password"
					  required
					  id="password-input"
					  name="password"
					  type="password"
					  minLength="3"
					  maxLength="16"
						disabled={ inputDisabled && "disabled" }
						onChange={ handleChange }
					/>
					<label className={`register__error ${!errors ? '' : 'rigister__error_active'}`}>{text}</label>
				</div>
				
				<div className="register__button">
					<button
						className="register__signup"
						type="submit"
						// disabled={}
					>Зарегестрироваться</button>
					<div className="register__block">
						<p className="register__question">Уже зарегестрированны?</p>
						<Link to="/signin" className="register__signin">Войти</Link>
					</div>
				
				</div>
				
			</form>
			
		
		</section>
	
	)
}