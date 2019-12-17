import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home.png'
import Back from './backarrow.png'
import Post from './post.png'
function SideNav()
{
  return(
    <div style={{ height:"500px", width:"100%",background:"#D3D3D3", opacity:"0.4",paddingLeft:"20px", margin:"0 auto"}}>
    <div className="row">
      <div className="d-inline">
        <p style={{fontSize:14,textAlign:"left",paddingTop:"20px",paddingLeft:"40px",fontWeight:"bold",opacity:"0.8"}}>MENU</p>
      </div>
      <div class="d-inine">
        <a href="#" >
         <img src={Back}  style={{height:"20px", width:"20px",margin:"20px auto auto 190px"}} alt="Back arrow"/>
        </a>
      </div>
    </div>
    <br/>

     <ul style={{listStyle:"none"}}>
      <li width="100%" className="btn-outline-primary">
      <p style={{position:"relative",fontSize:24,textAlign:"left",paddingLeft:"0%"}}>
      <img src={Home} alt="Home icon" height="40" width="40" style={{}}/>    Home</p>
      </li>
      <li className="btn-outline-primary">
       <p style={{fontSize:24,textAlign:"left",paddingLeft:"0%"}}>
       <img src={Post} alt="Post icon" height="40" width="40" style={{}}/>     Posts</p>
      </li>
      </ul>
    </div>
  )
}
export default SideNav
