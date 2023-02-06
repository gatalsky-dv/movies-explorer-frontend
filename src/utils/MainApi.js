import { BFM_URL } from './constants';

export const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3003' : 'https://api.gatalsky.nomoredomains.club';

// export const BFM_URL = 'https://api.nomoreparties.co';

function сheckResponseData(res) {
	if (res.ok) {
		return res.json();
	}
	return Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (name, email, password) => {
	return fetch(`${BASE_URL}/signup`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ name, email, password })
	})
		.then(res => сheckResponseData(res));
};

export const authorize = (email, password) => {
	return fetch(`${BASE_URL}/signin`, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email, password })
	})
		.then(res => сheckResponseData(res));
};

export const getUserInfo = async (token) => {
	console.log('ТОКЕН АПИ: ', token);
	return fetch(`${BASE_URL}/users/me`, {
		method: 'GET',
		headers: {
			authorization: `Bearer ${localStorage.getItem('token')}`,
			'Content-Type': 'application/json',
		},
	})
		.then(res => сheckResponseData(res));
}

export const editProfile = (name, email) => {
	return fetch(`${BASE_URL}/users/me`, {
		method: "PATCH",
		headers: {
			authorization: `Bearer ${localStorage.getItem('token')}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name,
			email,
		})
	})
		.then(res => сheckResponseData(res));
}

export const getCards = () => {
	return fetch(`${BASE_URL}/movies`, {
		method: 'GET',
		headers: {
			authorization: `Bearer ${localStorage.getItem('token')}`,
			'Content-Type': 'application/json',
		},
	})
		.then(res => сheckResponseData(res));
}

export const postCards = (data) => {
	return fetch(`${BASE_URL}/movies`, {
		method: 'POST',
		headers: {
			authorization: `Bearer ${localStorage.getItem('token')}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			country: data.country,
			director: data.director,
			duration: data.duration,
			year: data.year,
			description: data.description,
			image: `${BFM_URL + data.image.url}`,
			trailerLink: data.trailerLink,
			thumbnail: `${BFM_URL + data.image.formats.thumbnail.url}`,
			nameRU: data.nameRU,
			nameEN: data.nameEN,
			movieId: data.id,
		})
	})
		.then(res => сheckResponseData(res));
}

export const deleteCard = (movieId) => {
	return fetch(`${BASE_URL}/movies/${movieId._id}`, {
		method: "DELETE",
		headers: {
			authorization: `Bearer ${localStorage.getItem('token')}`,
			'Content-Type': 'application/json',
		},
	})
		.then(res => сheckResponseData(res));
}