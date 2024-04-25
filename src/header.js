import React from 'react'
import logo from './logo.svg';
import RandomQuoteGenerator from './RandomQuoteGenerator';
import ColorPicker from "./ColorPicker";
import './App.css';
import UserProfilePage from './userProfile';
const header = () => {
  return (
    <header className="Appheader">
        <ColorPicker />
        <UserProfilePage />
        <RandomQuoteGenerator />
      </header>
  )
}

export default header