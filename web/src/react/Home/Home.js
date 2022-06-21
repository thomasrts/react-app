import {profile, message, fleches, fleche, heart, flecheBottom} from '../LeftPart/icons';
import React from "react";
import ReactDOM from 'react-dom/client';
import $ from 'jquery';
import axios from 'axios';

class Home extends React.Component {
    tweets = [];

    constructor(props) {
        super(props);
        this.state = {
            tweets: props.tweets,
        }
    }
    createTweet = () => {
      $.ajax({
          url: 'http://localhost:3001/v1/tweets',
          method: 'POST', // or 'PUT'
          headers: {
              'Authorization': 'W9mVzVm1BVWe2O0EGmT7ta03HT7JQf52'
          },
          data: {
              content: document.getElementById('tweetContent').value,
              idUser: 1
          },
          success: function () {
              location.reload();
          }
      })
  }
  deleteTweet = (id) => {
    $.ajax({
      url: 'http://localhost:3001/v1/tweets/'+ id,
      method: 'DELETE',
      headers: {
        'Authorization': 'W9mVzVm1BVWe2O0EGmT7ta03HT7JQf52'
      },
      success: function(){
        location.reload();
      }
    })
  }

  componentDidMount() {
    console.log(this.state.tweets)

    axios({
      url:'http://localhost:3001/v1/tweets',
      method:'GET',
      headers:{
        'Authorization': 'W9mVzVm1BVWe2O0EGmT7ta03HT7JQf52'
      }
    }).then(res => {
      const tweets = res.data;
      this.setState({ tweets });
    })
  }


    render() {
        return (
            <>
            <div className="homePart">
              <div className="home home-tweet">
              <p className="title">Home</p>
            <div className="tweetSend">
            <div className="profil-tweet">
              {profile}
              <textarea
                type="text"
                name="tweet"
                id="tweetContent"
                placeholder="What's happening ?"
              />
            </div>
            <button class="btn-tweetSend" onClick={this.createTweet}>Tweet</button>
          </div>
        </div> 
       

        { this.props.tweets.map((tweet) => 
        <>
        <div className="hr"></div>
        <div class="listTweet home">
          <svg fill="currentColor" viewBox="0 0 24 24" class="r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path></g></svg>
          <div class="contain">
            <div class="profile">
              <p class="name">Justin</p>
              <p class="grey">@SKT-hffg</p>
              <p class="grey">3m</p>
            </div>
            <p>
              {tweet.content}
            </p>
            <div class="icons">
              <div class="icon">
              <svg class="svg-icon" viewBox="0 0 20 20">
              <path fill="grey" d="M10,2.262c-3.486,0-6.322,2.837-6.322,6.322c0,2.129,1.105,4.126,2.905,5.291l0.009,3.396c0.002,0.168,0.093,0.326,0.24,0.406c0.072,0.041,0.149,0.061,0.228,0.061c0.086,0,0.171-0.023,0.246-0.07l6.338-3.922c0.037-0.021,0.069-0.049,0.098-0.08c1.618-1.193,2.581-3.084,2.581-5.082C16.322,5.099,13.485,2.262,10,2.262z M13.109,12.969c-0.016,0.01-0.03,0.023-0.044,0.037l-5.542,3.426l-0.006-2.594c0.012-0.027,0.023-0.057,0.03-0.086c0.05-0.203-0.041-0.414-0.221-0.52c-1.675-0.963-2.715-2.746-2.715-4.648c0-2.971,2.417-5.387,5.388-5.387c2.971,0,5.387,2.417,5.387,5.387C15.387,10.316,14.536,11.955,13.109,12.969z"></path></svg>
                <p>{tweet.comments}</p>
              </div>
              <div class="icon">
                <svg class="svg-icon" viewBox="0 0 20 20">
                  <path fill="grey" d="M19.305,9.61c-0.235-0.235-0.615-0.235-0.85,0l-1.339,1.339c0.045-0.311,0.073-0.626,0.073-0.949
                  c0-3.812-3.09-6.901-6.901-6.901c-2.213,0-4.177,1.045-5.44,2.664l0.897,0.719c1.053-1.356,2.693-2.232,4.543-2.232
                  c3.176,0,5.751,2.574,5.751,5.751c0,0.342-0.037,0.675-0.095,1l-1.746-1.39c-0.234-0.235-0.614-0.235-0.849,0
                  c-0.235,0.235-0.235,0.615,0,0.85l2.823,2.25c0.122,0.121,0.282,0.177,0.441,0.172c0.159,0.005,0.32-0.051,0.44-0.172l2.25-2.25
                  C19.539,10.225,19.539,9.845,19.305,9.61z M10.288,15.752c-3.177,0-5.751-2.575-5.751-5.752c0-0.276,0.025-0.547,0.062-0.813
                  l1.203,1.203c0.235,0.234,0.615,0.234,0.85,0c0.234-0.235,0.234-0.615,0-0.85l-2.25-2.25C4.281,7.169,4.121,7.114,3.961,7.118
                  C3.802,7.114,3.642,7.169,3.52,7.291l-2.824,2.25c-0.234,0.235-0.234,0.615,0,0.85c0.235,0.234,0.615,0.234,0.85,0l1.957-1.559
                  C3.435,9.212,3.386,9.6,3.386,10c0,3.812,3.09,6.901,6.902,6.901c2.083,0,3.946-0.927,5.212-2.387l-0.898-0.719
                  C13.547,14.992,12.008,15.752,10.288,15.752z"></path>
                  </svg>
                <p>{tweet.retweets}</p>
              </div>
              <div class="icon">
                  <button onClick={() => Home.likeTweet(tweet.idTweet)} className={"btn-delete"}>
                      <svg className="svg-icon" viewBox="0 0 20 20">
                          <path fill="grey"
                                d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
                      </svg>
                  </button>
                <p>{tweet.likes}</p>
              </div>
              <div class="icon">
              <svg class="svg-icon" viewBox="0 0 20 20">
              <path fill="grey" d="M15.608,6.262h-2.338v0.935h2.338c0.516,0,0.934,0.418,0.934,0.935v8.879c0,0.517-0.418,0.935-0.934,0.935H4.392c-0.516,0-0.935-0.418-0.935-0.935V8.131c0-0.516,0.419-0.935,0.935-0.935h2.336V6.262H4.392c-1.032,0-1.869,0.837-1.869,1.869v8.879c0,1.031,0.837,1.869,1.869,1.869h11.216c1.031,0,1.869-0.838,1.869-1.869V8.131C17.478,7.099,16.64,6.262,15.608,6.262z M9.513,11.973c0.017,0.082,0.047,0.162,0.109,0.226c0.104,0.106,0.243,0.143,0.378,0.126c0.135,0.017,0.274-0.02,0.377-0.126c0.064-0.065,0.097-0.147,0.115-0.231l1.708-1.751c0.178-0.183,0.178-0.479,0-0.662c-0.178-0.182-0.467-0.182-0.645,0l-1.101,1.129V1.588c0-0.258-0.204-0.467-0.456-0.467c-0.252,0-0.456,0.209-0.456,0.467v9.094L8.443,9.553c-0.178-0.182-0.467-0.182-0.645,0c-0.178,0.184-0.178,0.479,0,0.662L9.513,11.973z"></path></svg>
                  <p class="none">{tweet.shares}</p>
              </div>
            </div>
          </div>
          <button class="btn-delete" onClick={()=> this.deleteTweet(tweet.idTweet)}><svg class="svg-icon fleche-bottom">
          <path fill="grey" d="M14.989,9.491L6.071,0.537C5.78,0.246,5.308,0.244,5.017,0.535c-0.294,0.29-0.294,0.763-0.003,1.054l8.394,8.428L5.014,18.41c-0.291,0.291-0.291,0.763,0,1.054c0.146,0.146,0.335,0.218,0.527,0.218c0.19,0,0.382-0.073,0.527-0.218l8.918-8.919C15.277,10.254,15.277,9.784,14.989,9.491z"></path>
          </svg></button> 
        </div> 
        </>
        )}
      </div>
        </>
    )
  };

    static likeTweet(idTweet) {
        axios({
            url:"http://localhost:3001/v1/tweets/"+idTweet+"/like",
            method:"POST",
            headers:{
                'Authorization': 'W9mVzVm1BVWe2O0EGmT7ta03HT7JQf52'
            }
        }).then((response) => {
            if(response.code === 200){
                location.reload();
            }
        })
    }
}

export default Home;