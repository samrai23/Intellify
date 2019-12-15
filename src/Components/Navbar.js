import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Group.png';
import University from './university.png';
import Circle from './circle-24.ico';
import Create from './create.png'
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import Entypo from 'react-native-vector-icons/Entypo';

// fontWeight: "bold",

function Navbar(){
  return(
    <div>
      <img src={Logo} width="100%" alt="logo"/>
      <text style={{position:'absolute',color: 'white',fontSize: 25,  top:60, left:200 }}>Welcome!</text>
      <text style={{position:'absolute',color: 'white',fontSize: 27,fontWeight: "bold",  top:90, left:200 }}>Your Name</text>
      <img src={University} alt="university icon" height="20" width="20" style={{position:'absolute',color: 'white',fontSize: 25,fontWeight: "bold",  top:130, left:200 }}/>
      <img src={Circle} alt="Profile icon" height="70" width="70" style={{position:'absolute',color: 'white',borderRadius:200,fontSize: 25,fontWeight: "bold",  top:80, left:110 }}/>
      <text style={{position:'absolute',color: 'white',fontSize: 15,  top:130, left:230 }}>Your School</text>
      <a href="#">
      <img src={Circle} alt="Profile icon" height="30" width="30" style={{position:'absolute',color: 'white',borderRadius:100,fontSize: 25,fontWeight: "bold",  top:120, left:370 }}/>
      <img src={Create} alt="Profile icon" height="20" width="20" style={{position:'absolute',color: 'white',fontSize: 25,fontWeight: "bold",  top:125, left:375 }}/>
      </a>
    </div>
  )
}

export default Navbar

// <Ionicons name="ios-arrow-back" color= size={25} style={{ position: 'absolute', top: 30, left: 10 }} />
