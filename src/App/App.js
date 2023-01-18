import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from "../component/Navbar"
import "../bootstrap.css"
import Home from '../component/Home';
// import NewsItem from '../component/news-item/NewsItem';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
    </div>
  );
}export default App;
