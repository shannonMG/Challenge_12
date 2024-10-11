import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className ="app-wrapper">
      <Header />
      <main className= "content=card"></main>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
