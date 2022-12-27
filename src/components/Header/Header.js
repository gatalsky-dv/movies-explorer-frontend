import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (

    <header className="header">
      <Link to="/" className="logo"></Link>
      <div className="header__profile">
        <Link to="/signup" className="header__registration">Регистрация</Link>
        <Link to="/signin" className="header__login">Войти</Link>
      </div>
    </header>

  )
}