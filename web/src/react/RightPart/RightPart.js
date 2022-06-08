import { points } from '../LeftPart/icons';
const RightPart = () => {
    return (
      <div className="rightPart">
        <div>
          <input className="search" type="search" name="search" placeholder="Search Twitter" />
        </div>
        <div className="tendances">
          <p className='trend'>Trends for you</p>
          <div className='tendances-bloc'>
            <div className='tendance'>
              <p className='grey'>Travel - Trending</p>
              <p className='title'>#DisneyLand Paris</p>
              <p className='grey'>1,234 Tweets</p>
            </div>
            {points}
          </div>
          <div className='tendances-bloc'>
            <div className='tendance'>
              <p className='grey'>Travel - Trending</p>
              <p className='title'>#DisneyLand Paris</p>
              <p className='grey'>1,234 Tweets</p>
            </div>
            {points}
          </div>
          <div className='tendances-bloc'>
            <div className='tendance'>
              <p className='grey'>Travel - Trending</p>
              <p className='title'>#DisneyLand Paris</p>
              <p className='grey'>1,234 Tweets</p>
            </div>
            {points}
          </div>
          <div className='tendances-bloc'>
            <div className='tendance'>
              <p className='grey'>Travel - Trending</p>
              <p className='title'>#DisneyLand Paris</p>
              <p className='grey'>1,234 Tweets</p>
            </div>
            {points}
          </div>
          <div className='tendances-bloc'>
            <div className='tendance'>
              <p className='grey'>Travel - Trending</p>
              <p className='title'>#DisneyLand Paris</p>
              <p className='grey'>1,234 Tweets</p>
            </div>
            {points}
          </div>
          <div className='tendances-bloc'>
            <div className='tendance'>
              <p className='grey'>Travel - Trending</p>
              <p className='title'>#DisneyLand Paris</p>
              <p className='grey'>1,234 Tweets</p>
            </div>
            {points}
          </div>
        </div>
       
      </div>
    )
  }
  
  export default RightPart;