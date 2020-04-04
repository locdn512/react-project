import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './containers/HomePage';
import Header from './components/Header';
import Benefit from './components/Benefit';
import Footer from './components/Footer';



function App() {
  // const name = "Đặng Nguyên Lộc";

  return (

    <div className="App">
      <Header />
      <HomePage />
      <Benefit />
      <Footer />
    </div>
  );
}

export default App;
