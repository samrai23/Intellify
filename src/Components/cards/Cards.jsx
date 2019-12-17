import React from 'react'
import Card from './cardUI';

function Cards()
{
  return(
    <div className="container-fluid d-flex justify">
    <br/>
     <div style={{width: "100%"}}>
       <ul class="list-group ">
          <li class="list-group-item mt-3"><br/><Card/></li>
          <li class="list-group-item mt-3"><br/><Card/></li>
          <li class="list-group-item mt-3"><br/><Card/></li>
       </ul>
     </div>
    </div>
  )
}

export default Cards;
