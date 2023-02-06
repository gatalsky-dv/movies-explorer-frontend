import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";

export default function Header({ loggedIn }) {
  
  const [ click, setClick ] = useState(false);
  
  function handleClick() {
    setClick(!click);
  }
  console.log('ПРИШЛИ В ХЭДЭР: ', loggedIn);
  
  return (

    <header className="header">
      {!loggedIn ? (
        <>
          <Link to="/" className="logo"></Link>
          <div className="header__profile">
            <Link to="/signup" className="header__registration">Регистрация</Link>
            <Link to="/signin" className="header__login">Войти</Link>
          </div>
        </>) : (
        <>
        <div className="headermovies__movies">
          <Link to="/" className="logo"></Link>
          <div className="headermovies__links">
            <Link to="/movies" className="headermovies__link headermovies__link_login">Фильмы</Link>
            <Link to="/saved-movies" className="headermovies__link headermovies__link_login">Сохраненные фильмы</Link>
          </div>
        </div>
        <button type="button" className="headermovies__burger headermovies__burger_login" onClick={handleClick}></button>
        <div className="headermovies__account">
          <h3 className="text text_login">Аккаунт</h3>
          <div className="button">
          <Link to="/profile" className="link"></Link>
          </div>
        </div>
        <Navigation isOpen={click} onClose={handleClick} />
        </>
        )
      }
    </header>

  )
}