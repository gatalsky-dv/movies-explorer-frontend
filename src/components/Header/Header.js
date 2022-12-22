import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {

  return (

    <header className="header">
      <a href="/" className="header__logo" />
      <div className="header__profile">
        <a href="/signup" className="header__registration">Регистрация</a>
        <a href="/signin" className="header__login">Войти</a>
      </div>
    </header>

  )
}