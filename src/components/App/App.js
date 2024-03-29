import React, { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import '../../index.css';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Profile from '../User/Profile/Profile';
import Register from '../User/Register/Register';
import Login from '../User/Ligin/Login';
import Error from '../Error/Error';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import CurrentUserContext from '../../contexts/CurrentUserContext';

import * as MainApi from '../../utils/MainApi';
import api from '../../utils/MoviesApi';

import {
	ADD_CARDS_FOR_WIDTH_1280,
	ADD_CARDS_FOR_WIDTH_320,
	CARDS_FOR_WIDTH_1280,
	CARDS_FOR_WIDTH_320,
	CARDS_FOR_WIDTH_768,
	Error_401,
	WIDTH1280,
	WIDTH768,
	WIDTH320,
	WIDTH480,
	ERROR_REGISTER_TEXT,
	ERROR_LOGIN_TEXT,
} from "../../utils/constants";

export default function App() {
	
	const navigate = useNavigate();
	const [loggedIn, setLoggedIn] = useState(true);
	const [cards, setCards] = useState([]);
	const [saveCards, setSaveCards] = useState([]);
	const [cardsArray, setCardsArray] = useState([]);
	const [cardsArraySaved, setCardsArraySaved] = useState([]);
	const [saveCardsVisible, setSaveCardsVisible] = useState(false);
	const [cardInput, setCardInput] = useState('');
	const [cardInputSaved, setCardInputSaved] = useState('');
	const [cardsSwitch, setCardsSwitch] = useState('');
	const [cardsSavedSwitch, setCardsSavedSwitch] = useState(false);
	const [currentUser, setCurrentUser] = useState({});
	const [preloader, setPreloader] = useState(false);
	const [errorData, setErrorData] = useState(false);
	const [cardsOutput, setCardsOutput] = useState(cardsOutputList());
	const addCadsOutput = addCardsOutputList();
	
	useEffect(() => {
		const token = localStorage.getItem('token');
		setLoggedIn(false);
		if (token) {
			setLoggedIn(true);
			authentication(token);
		}
	}, [loggedIn]);
	
	useEffect(() => {
		if (errorData) {
			setTimeout(()=>{
				setErrorData(false);
			}, 5000);
		}
	})
	
	useEffect(() => {
		setErrorData(false);
		if (loggedIn && localStorage.getItem('token')) {
			MainApi
				.getUserInfo()
				.then((res) => {
					setCurrentUser(res);
				})
				.catch((err) => {
					console.log(err, ERROR_LOGIN_TEXT);
					setErrorData(true);
				});
		}
	}, [loggedIn]);
	
	useEffect(() => {
		setErrorData(false);
		if (loggedIn && localStorage.getItem('token')) {
			MainApi
				.getCards()
				.then((res) => {
					setSaveCards(res);
				})
				.catch((err) => {
					console.log(err);
					setErrorData(true);
				});
		}
	}, [loggedIn]);
	
	useEffect(() => {
		setErrorData(false);
		api
			.getInitialCards()
			.then((res) => {
				setCards(res);
			})
			.catch((err) => {
				console.log(err);
				setErrorData(true);
			});
	}, []);
	
	const handleLogin = async ({ email, password }) => {
		setPreloader(true);
		setErrorData(false);
		return MainApi
			.authorize(email, password)
			.then((data) => {
				if (data.token) {
					localStorage.setItem('token', data.token);
					setLoggedIn(true);
					navigate('/movies');
				}
			})
			.catch((err) => {
				unauthorized(err);
				setErrorData(true);
				console.log(err, ERROR_LOGIN_TEXT);
			})
			.finally(() => {
				setPreloader(false);
			})
	};
	
	const handleRegister = async (name, email, password) => {
		setPreloader(true);
		setErrorData(false);
		return MainApi
			.register(name, email, password)
			.then((res) => {
					handleLogin({email, password});
			})
			.catch((err) => {
				setErrorData(true);
				console.log(err, ERROR_REGISTER_TEXT);
			})
			.finally(() => {
				setPreloader(false);
			})
	};
	
	const handleUpdateUser = async (name, email) => {
		setPreloader(true);
		setErrorData(false);
		MainApi.editProfile(name, email)
			.then((res) => {
				setCurrentUser(res);
				// navigate('/movies');
			})
			.catch((err) => {
				setErrorData(true);
				console.log(err, ERROR_REGISTER_TEXT);
			})
			.finally(() => {
				setPreloader(false);
			})
	};
	
		const handleCardLike = async (data) => {
			setPreloader(true);
			setErrorData(false);
			MainApi
				.postCards(data)
				.then((res) => {
					setSaveCards([...saveCards, res.data]);
				})
				.catch((err) => {
					setErrorData(true);
					console.log(err);
				})
				.finally(() => {
					setPreloader(false);
				});
		};
	
	const handleCardDelete = async (movieId) => {
		setPreloader(true);
		setErrorData(false);
		MainApi
			.deleteCard(movieId)
			.then(() => {
				setSaveCards(saveCards.filter(card => card !== movieId));
				setCardsArraySaved(saveCards.filter(card => card !== movieId));
			})
			.catch((err) => {
				setErrorData(true);
				console.log(err);
			})
			.finally(() => {
				setPreloader(false);
			});
	};
	
	const unauthorized = (err) => {
		if (err === Error_401) {
			handleSignOut();
		}
	}

	const handleSignOut = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('cardInput');
		localStorage.removeItem('cardsSwitch');
		localStorage.removeItem('cardsArray');
		navigate('/');
		setLoggedIn(false);
		setCardsArray([]);
		setCardInput([]);
		setCardsSwitch('');
		setSaveCards([]);
	}
	
	const authentication = async (token) => {
		setErrorData(false);
		MainApi
			.getUserInfo(token)
			.then((res) => {
				if (res) {
					setLoggedIn(true);
				}
			})
			.catch((err) => {
				setLoggedIn(false);
				setErrorData(true);
				console.log(err);
			});
	};
	
	function cardsOutputList() {
		if (window.innerWidth > WIDTH1280) {
			return CARDS_FOR_WIDTH_1280;
		}
		if (window.innerWidth > WIDTH768) {
			return CARDS_FOR_WIDTH_768;
		}
		if (WIDTH320 < window.innerWidth < WIDTH480) {
			return CARDS_FOR_WIDTH_320;
		}
	}
	
	function addCardsOutputList() {
		if (window.innerWidth > WIDTH1280) {
			return ADD_CARDS_FOR_WIDTH_1280;
		}
		if (WIDTH320 < window.innerWidth < WIDTH480) {
			return ADD_CARDS_FOR_WIDTH_320;
		}
	}
	
	// window.onresize = () => {
	// }
	
	function handleMovieSearch(cardArraySelect) {
		const movieArray = cardArraySelect.filter((movie) => {
			if (movie.nameRU.toLowerCase().includes(cardInput.toLowerCase())) {
				return movie;
			}
		});
		setCardsArray(movieArray);
		localStorage.setItem('cardsArray', JSON.stringify(movieArray));
		localStorage.setItem('cardInput', JSON.stringify(cardInput));
		localStorage.setItem('cardsSwitch', JSON.stringify(cardsSwitch));
	}
	
	function handleSaveMovieSearch(cardArraySelect) {
		const movieArray = cardArraySelect.filter((movie) => {
			if (movie.nameRU.toLowerCase().includes(cardInputSaved.toLowerCase())) {
				return movie;
			}
		});
		setSaveCardsVisible(true);
		setCardsArraySaved(movieArray);
	}
	
  return (
	
	  <CurrentUserContext.Provider value={currentUser}>
	    <div className="app">
	      <Routes>
	        <Route path="/" element={
	          <>
	            <Header loggedIn={loggedIn}/>
	            <Main />
	            <Footer />
	          </>
	        } />
	        <Route path="/movies" element={
		        <ProtectedRoute loggedIn={loggedIn} path="/movies">
						<Movies
							loggedIn={loggedIn}
							preloader={preloader}
							cards={cards}
							cardsSwitch={cardsSwitch}
							setCardsSwitch={setCardsSwitch}
							cardInput={cardInput}
							setCardInput={setCardInput}
							cardsArray={cardsArray}
							saveCards={saveCards}
							setSaveCards={setSaveCards}
							cardsOutput={cardsOutput}
							setCardsOutput={setCardsOutput}
							addCadsOutput={addCadsOutput}
							onMovieSearch={handleMovieSearch}
							onCardLike={handleCardLike}
							onCardDelete={handleCardDelete}
							errorData={errorData}
						/>
		        </ProtectedRoute>
					}
	        />
			    <Route path="/saved-movies" element={
				    <ProtectedRoute
					    loggedIn={loggedIn} >
				    <SavedMovies
					    loggedIn={loggedIn}
					    preloader={preloader}
					    saveCards={saveCards}
					    cardsSavedSwitch={cardsSavedSwitch}
					    setCardsSavedSwitch={setCardsSavedSwitch}
					    cardInputSaved={cardInputSaved}
					    setCardInputSaved={setCardInputSaved}
					    cardsArraySaved={cardsArraySaved}
					    cardsOutput={cardsOutput}
					    setCardsOutput={setCardsOutput}
					    addCadsOutput={addCadsOutput}
					    onSaveMovieSearch={handleSaveMovieSearch}
					    onCardLike={handleCardLike}
					    onCardDelete={handleCardDelete}
					    errorData={errorData}
					    saveCardsVisible={saveCardsVisible}
				    />
				    </ProtectedRoute>
					}
			    />
		      <Route path="/profile" element={
			      <ProtectedRoute
				      loggedIn={loggedIn} >
				      <Profile
					      onUpdateUser={handleUpdateUser}
					      onSignOut={handleSignOut}
					      preloader={preloader}
					      errorData={errorData}
					      loggedIn={loggedIn}
				      />
						</ProtectedRoute>
						}

		      />
		      <Route path="/signin" element={
			      loggedIn ? (
				      <Navigate to='/movies' />
				    ) : (
					    <Login
						    onLogin={handleLogin}
					      preloader={preloader}
						    errorData={errorData}
					    />
			      )}
		      />
		      <Route path="/signup" element={
			      loggedIn ? (
				      <Navigate to='/movies' />
			      ) : (
				      <Register
					      onRegister={handleRegister}
					      preloader={preloader}
					      errorData={errorData}
				      />
			      )
					}
		      />
		      <Route path="*" element={ <Error />} />
	      </Routes>
	    </div>
	  </CurrentUserContext.Provider>
	);
}