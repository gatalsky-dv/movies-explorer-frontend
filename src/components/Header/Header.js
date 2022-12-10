// import { Link, Route, Switch } from 'react-router-dom';

export default function Header({ email }) {

  return (
    // <header className="header">
    //   <a href={`mailto:${email}`} className="header__logo" />
    //   <div className="header__movies">
    //     {/* <a href="#" className="header__allmovies">Фильмы</a> */}
    //     {/* <a href="#" className="header__savemovies">Сохраненные фильмы</a> */}
    //   </div>
    //   <div className="header__profile">
    //     {/* <button className="header__burger"></button> */}
    //     <a href="#" className="header__registration">Регистрация</a>
    //     <button className="header__login">Войти</button>
    //     {/* <button className="header__account">Аккаунт</button> */}
    //   </div>
    // </header>

    <header className="header">
      <a href={`mailto:${email}`} className="header__logo" />
      <div className="header__movies">
        {/* <a href="#" className="header__allmovies">Фильмы</a> */}
        {/* <a href="#" className="header__savemovies">Сохраненные фильмы</a> */}
      </div>
      <div className="header__profile">
        {/* <button className="header__burger"></button> */}
        <a href="#" className="header__registration">Регистрация</a>
        <button className="header__login">Войти</button>
        {/* <button className="header__account">Аккаунт</button> */}
      </div>
    </header>

  )
}