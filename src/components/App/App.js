import React from 'react';
import '../../index.css';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Promo from '../Main/Promo/Promo';
import AboutMe from '../Main/AboutMe/AboutMe';
import AboutProject from '../Main/AboutProject/AboutProject';
import Tech from '../Main/Techs/Tech';
import Portfolio from '../Main/Portfolio/Portfolio';
import Footer from '../Footer/Footer';
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import MoreButton from "../Movies/MoreButton/MoreButton";
import Profile from "../User/Profile/Profile";
import Register from "../User/Register/Register";


export default function App() {

  return (
    <CurrentUserContext.Provider>
      <div className="app">
        {/*<Header />*/}
        {/*<Promo />*/}
        {/*<AboutProject />*/}
        {/*<Tech />*/}
        {/*<AboutMe />*/}
        {/*<Portfolio />*/}
        {/*<SearchForm />*/}
        {/*<MoviesCardList />*/}
        {/*<MoreButton />*/}
        
				{/*<Footer />*/}
        {/*<Profile />*/}
        <Register />
        {/* <Switch>
						<ProtectedRoute
							exact
							path='/'
							component={ Main }
							loggedIn={loggedIn}
							onEditProfile={handleEditProfileClick}
							onAddPlace={handleAddPlaceClick}
							onEditAvatar={handleEditAvatarClick}
							onCardClick={handleCardClick}
							cards={cards}
							onCardLike={handleCardLike}
							onCardDelete={handleCardDelete}
						/>
						<Route path='/sign-in'>
							<Login
								onLogin={onLogin}
							/>
						</Route>
						<Route path='/sign-up'>
							<Register
								onRegister={onRegister}
							/>
						</Route>
						<Route path='*'>
							{loggedIn ? (
								<Redirect to='/' />
							) : (
								<Redirect to='/sign-in' />
							)}
						</Route>
					</Switch> */}

        {/* <Footer/> */}

      </div>
    </CurrentUserContext.Provider>
  );
}