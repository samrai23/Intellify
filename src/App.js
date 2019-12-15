import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import SideNav from './Components/sidenav'
import Card from './Components/cards/Cards.jsx'

function App() {
  return (
    <div className="App">
     <Navbar />
     <SideNav/>
     <Card/>
    </div>
  );
}

export default App;
