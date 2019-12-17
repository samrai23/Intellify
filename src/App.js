import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar'
import SideNav from './Components/sidenav'
import Cards from './Components/cards/Cards.jsx'
import { Component } from 'react'
import Carousel from './Components/carousel/carousel.jsx'
import Form from './Components/Form.js'
import { MDBContainer } from 'mdbreact'
import 'bootstrap/dist/css/bootstrap.min.css';
import Plus from './Components/plus.png'


class App extends Component {
  render(){
  return(
    <div className="App">
     <Navbar />
     <div className="container-fluid m-0">
      <div className="row ">
        <div className="col-3 ">
          <br/><br/>
          <SideNav/>
        </div>
        <div className="col-9">
          <br/><br/>
          <Cards />
        </div>
      </div>
     </div>

    <br/><br/><br/><br/>

      <div height="100px" class="container-fluid d-flex media-overflow bg-primary">
          <button type="button" class="btn justify-content-left">
            <i class="fas fa-bars fa-lg"></i>
          </button>
          <button type="button" class="btn justify-content-flex-end">
            <img src={Plus} height="30px" width="30px" />
          </button>
          <button type="button" class="btn justify-content-flex-end">
            <i class="fas fa-user-circle fa-2x"></i>
          </button>
        </div>

<br/><br/><br/><br/>

     <div className="container">
      <Carousel/>
      <br/><br/>
      <Form/>
     </div>

    </div>
  )
  }
}

export default App;
