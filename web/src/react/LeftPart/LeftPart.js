import React from 'react';
import { home, explore, twitter, notifications, messages, bookmarks, lists, profile, more } from './icons';
import { Link } from "react-router-dom";

class LeftPart extends React.Component {

  render(){

    return (
      <div className="nav leftPart">
        <ul>
          <li><a className="logo" href="#">{twitter}</a></li>
          <li><Link className="link" to="/">{home} Home</Link></li>
          <li><a href="#">{explore} Explore</a></li>
          <li><a href="#">{notifications} Notifications</a></li>
          <li><a href="#">{messages} Messages</a></li>
          <li><a href="#">{bookmarks} Bookmarks</a></li>
          <li><a href="#">{lists} Lists</a></li>
          <li><Link className="link" to="/mon-compte">{home} Profile</Link></li>
          <li><a href="#">{more} More</a></li>
        </ul>

        <button className="btn-tweet">Tweet</button>

      <Link to="/mon-compte">
        <div className="profil">
          <div>
            <p className="name">Tom</p>
            <p>@tom_df</p>
          </div>
          <p>...</p>
        </div>
      </Link>

      </div>
    
    )
  }
}
  
  export default LeftPart;