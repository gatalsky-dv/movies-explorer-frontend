import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../../index.css';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import Profile from "../User/Profile/Profile";
import Register from "../User/Register/Register";
import Login from "../User/Ligin/Login";
import Error from "../Error/Error";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import SavedMovies from "../SavedMovies/SavedMovies";
export default function App() {

  return (
    <BrowserRouter>
    <div className="app">
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Main />
            <Footer />
          </>
        } />
        <Route path="/movies" element={
          <>
            <HeaderMovies />
            <SearchForm />
            <MoviesCardList />
            <Footer />
          </>
        } />
        <Route path="/saved-movies" element={
          <>
            <HeaderMovies />
            <SearchForm />
            <SavedMovies />
            <Footer />
          </>
        } />
        <Route path="/profile" element={
          <>
            <Profile />
          </>
        } />
        <Route path="/signin" element={
          <>
            <Login />
          </>
        } />
        <Route path="/signup" element={
          <>
            <Register />
          </>
        } />
        <Route path="*" element={ <Error />} />
      </Routes>

    </div>
    </BrowserRouter>
  );
}