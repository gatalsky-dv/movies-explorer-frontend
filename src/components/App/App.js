import CurrentUserContext from '../../contexts/CurrentUserContext';
import Header from '../Header/Header';
import Promo from '../Main/Promo/Promo';

export default function App() {


  return (
    <CurrentUserContext.Provider>
      <div className="app">
        <Header />
        <Promo />
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