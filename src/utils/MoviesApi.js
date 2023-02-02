export class MoviesApi {
	constructor({ url, headers }) {
		this._url = url;
		// this._headers = headers;
	}
	
	_сheckResponseData(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка: ${res.status}`);
	}
	
	getInitialCards() {
		return fetch(this._url, {
			method: "GET",
		})
			.then(res => this._сheckResponseData(res))
	}
	
}
	
const BFM_URL = 'https://api.nomoreparties.co/beatfilm-movies';
	
const api = new MoviesApi({
	url: BFM_URL,
	headers: {
		authorization: `Bearer ${localStorage.getItem('token')}`,
		'Content-Type': 'application/json'
	}
});
export default api;