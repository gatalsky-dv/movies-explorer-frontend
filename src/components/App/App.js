import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../../index.css';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Profile from "../User/Profile/Profile";
import Register from "../User/Register/Register";
import Login from "../User/Ligin/Login";
import Error from "../Error/Error";
import HeaderMovies from "../HeaderMovies/HeaderMovies";
import Movies from "../Movies/Movies";
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
            <Movies />
            <Footer />
          </>
        } />
        <Route path="/saved-movies" element={
          <>
            <HeaderMovies />
            <Movies />
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