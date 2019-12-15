import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.png'
import Back from './backarrow.png'
import Post from './post.png'
function SideNav()
{
  return(
    <div style={{ height:"500px", width:"250px",background:"#D3D3D3", opacity:"0.4",paddingLeft:"20px"}}>
    <p style={{fontSize:14,textAlign:"left",paddingTop:"20px",paddingLeft:"40px",fontWeight:"bold",opacity:"0.8"}}>MENU</p>
    <img src={Back} style={{height:"20px", width:"20px", position:'absolute', top:"200px", left:"210px" }} alt="Back arrow"/>

    <br/>

     <ul style={{listStyle:"none"}}>
      <li>
      <p style={{position:"relative",fontSize:24,textAlign:"left",paddingLeft:"0%"}}><img src={Home} alt="Home icon"
      height="40" width="40" style={{}}/>    Home</p>
      </li>
      <li>
      <p style={{fontSize:24,textAlign:"left",paddingLeft:"0%"}}><img src={Post} alt="Post icon"
      height="40" width="40" style={{}}/>     Posts</p>
      </li>
      </ul>
    </div>
  )
}
export default SideNav
