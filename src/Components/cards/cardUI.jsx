import React from 'react'
import User from './user.png'
const Card=props=>{
  return(
    <div className="card text-center">
        <div className="media overflow">
          <span class="media-left">
             <img src={User} alt="profile"/>
          </span>
          <div class="media-body">
            <h3 class="media-heading">Experience</h3>
          </div>
        </div>
      <div className="card-body text dark">
        <p className="card-text text-secondary">
          lorem ipsum .......fsdfsdfsfs
        </p>
      <a href="#" className="btn btn-outline-danger">Go anywhere</a>
      </div>
    </div>
  );
}

export default Card;
