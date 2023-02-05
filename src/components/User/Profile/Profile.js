import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import { Validation } from "../../../utils/Validation";
import CurrentUserContext from "../../../contexts/CurrentUserContext";
import Preloader from "../../Preloader/Preloader";
import { SUCCESS, ERROR_UPDATE_USER } from "../../../utils/constants";
import HeaderMovies from "../../HeaderMovies/HeaderMovies";

export default function Profile({ onUpdateUser, onSignOut, preloader, loggedIn, errorData, profileEditedSuccess }) {
	const currentUser = useContext(CurrentUserContext);
	const { values, handleChange } = Validation();
	
	function handleSubmit(e) {
		e.preventDefault();
		if (values.name !== currentUser.name & values.name !== undefined || values.email !== currentUser.email & values.email !== undefined) {
			onUpdateUser(values.name ? values.name : currentUser.name, values.email ? values.email : currentUser.email);
			// setTimeout(()=>{
			// 	setErrorData(false);
			// }, 4000);
		}
	}
	
	return (
		<>
			<HeaderMovies
				loggedIn={ loggedIn }
			/>
			<section className="profile">
				{preloader && <Preloader />}
				<h1 className="profile__greeting">Привет, {currentUser.name}</h1>
				{errorData &&
					<p className="moviescardlist__text">{ERROR_UPDATE_USER}</p>
				}
				{profileEditedSuccess &&
					<p className="moviescardlist__text">{SUCCESS}</p>
				}
				<form className="profile__form" onSubmit={handleSubmit}>
					<div className="profile__info">
						<label className="profile__text">Имя</label>
						<input
							className="profile__text profile__text_input"
							required
							id="name-input"
							name="name"
							type="text"
							placeholder="Имя"
							minLength="2"
							maxLength="40"
							pattern="[A-Za-zА-Яа-я\s]{1,20}$"
							// disabled={ inputDisabled && "disabled" }
							onChange={ handleChange }
							defaultValue={currentUser.name}
						/>
					</div>
					<div className="line profile__line"></div>
					<div className="profile__info">
						<label className="profile__text">E-mail</label>
						<input
							className="profile__text profile__text_input"
							required
							id="email-input"
							name="email"
							type="email"
							placeholder="Email"
							minLength="2"
							maxLength="40"
							pattern="[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,20}$"
							// disabled={ inputDisabled && "disabled" }
							onChange={ handleChange }
							defaultValue={currentUser.email}
						/>
					</div>
					<div className="profile__button">
						<button
							className="profile__edit"
							type="submit"
							onClick={ handleSubmit }
							// disabled
						>Редактировать
						</button>
						<Link to="/" className="profile__edit profile__edit_exit" onClick={ onSignOut }>Выйти из аккаунта</Link>
					</div>
				</form>
			</section>
		</>
	)
}