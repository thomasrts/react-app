import { home, explore, twitter, notifications, messages, bookmarks, lists, profile, more } from './icons';

const LeftPart = () => {
    return (
      <div className="nav">
        <ul>
          <li><a className="logo" href="#">{twitter}</a></li>
          <li><a href="#">{home} Home</a></li>
          <li><a href="#">{explore} Explore</a></li>
          <li><a href="#">{notifications} Notifications</a></li>
          <li><a href="#">{messages} Messages</a></li>
          <li><a href="#">{bookmarks} Bookmarks</a></li>
          <li><a href="#">{lists} Lists</a></li>
          <li><a href="#">{profile} Profile</a></li>
          <li><a href="#">{more} More</a></li>
        </ul>

        <button className="btn-tweet">Tweet</button>

        <div className="profil">
          <div>
            <p className="name">Tom</p>
            <p>@tom_df</p>
          </div>
          <p>...</p>
        </div>

      </div>
    )
  }
  
  export default LeftPart;