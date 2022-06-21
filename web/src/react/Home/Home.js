import { profile, message, fleches, fleche, heart, flecheBottom } from '../LeftPart/icons';
import React from "react";
import $ from 'jquery';
class Home extends React.Component {
  tweets = [];

  constructor(props) {
    super(props);
    this.state = {
      tweets: props.tweets,
    }
  }
    
  createTweet = () =>  {
    $.ajax({
      url:'http://localhost:3001/v1/tweets',
      method:'POST', // or 'PUT'
      headers: {
        'Authorization': 'W9mVzVm1BVWe2O0EGmT7ta03HT7JQf52'
      },
      data:{
        content: document.getElementById('tweetContent').value,
        idUser: 1
      },
      success: function(){
        alert("Tweet successfully created")
      }
    })
  }

  componentDidMount() {
    for(let tweet in this.tweets){
      $('#tweets').append(tweet)
    }
  }


  render() {
      return(
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
            <button className="btn-tweetSend" onClick={this.createTweet}>Tweet</button>
          </div>
        </div>
        <div id="tweets">

        </div>
        <div className="hr"></div>
        <div className="listTweet home">
          {profile}
          <div className="contain">
            <div className="profile">
              <p className="name">Justin</p>
              <p className="grey">@SKT-hffg</p>
              <p className="grey">3m</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis consequat lorem, at suscipit magna. Quisque
              eleifend non felis in ullamcorper. Sed tincidunt quam eu quam
              tincidunt consequat. Pellentesque sodales egestas consectetur.
              Pellentesque quis scelerisque nunc. Pellentesque lacinia
              consectetur tristique. Ut congue, urna in auctor lacinia, orci
              nulla tempus erat, tempor convallis felis erat vel dolor. Proin
              rutrum commodo neque non condimentum. Donec aliquam vel neque ac
              egestas. Sed quis orci quis nisi convallis egestas. Sed vestibulum
              porta ex, ac porta nisi elementum id.
            </p>
            <div className="icons">
              <div className="icon">
                {message}
                <p>3</p>
              </div>
              <div className="icon">
                {fleches}
                <p>1</p>
              </div>
              <div className="icon">
                {heart}
                <p>16</p>
              </div>
              <div className="icon">
                {fleche}
                <p className="none">0</p>
              </div>
            </div>
          </div>
          {flecheBottom}
        </div>
        <div className="hr"></div>
        <div className="listTweet home">
          {profile}
          <div className="contain">
            <div className="profile">
              <p className="name">Justin</p>
              <p className="grey">@SKT-hffg</p>
              <p className="grey">3m</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis consequat lorem, at suscipit magna. Quisque
              eleifend non felis in ullamcorper. Sed tincidunt quam eu quam
              tincidunt consequat. Pellentesque sodales egestas consectetur.
              Pellentesque quis scelerisque nunc. Pellentesque lacinia
              consectetur tristique. Ut congue, urna in auctor lacinia, orci
              nulla tempus erat, tempor convallis felis erat vel dolor. Proin
              rutrum commodo neque non condimentum. Donec aliquam vel neque ac
              egestas. Sed quis orci quis nisi convallis egestas. Sed vestibulum
              porta ex, ac porta nisi elementum id.
            </p>
            <div className="icons">
              <div className="icon">
                {message}
                <p>3</p>
              </div>
              <div className="icon">
                {fleches}
                <p>1</p>
              </div>
              <div className="icon">
                {heart}
                <p>16</p>
              </div>
              <div className="icon">
                {fleche}
                <p className="none">0</p>
              </div>
            </div>
          </div>
          {flecheBottom}
        </div>
        <div className="hr"></div>
        <div className="listTweet home">
          {profile}
          <div className="contain">
            <div className="profile">
              <p className="name">Justin</p>
              <p className="grey">@SKT-hffg</p>
              <p className="grey">3m</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis consequat lorem, at suscipit magna. Quisque
              eleifend non felis in ullamcorper. Sed tincidunt quam eu quam
              tincidunt consequat. Pellentesque sodales egestas consectetur.
              Pellentesque quis scelerisque nunc. Pellentesque lacinia
              consectetur tristique. Ut congue, urna in auctor lacinia, orci
              nulla tempus erat, tempor convallis felis erat vel dolor. Proin
              rutrum commodo neque non condimentum. Donec aliquam vel neque ac
              egestas. Sed quis orci quis nisi convallis egestas. Sed vestibulum
              porta ex, ac porta nisi elementum id.
            </p>
            <div className="icons">
              <div className="icon">
                {message}
                <p>3</p>
              </div>
              <div className="icon">
                {fleches}
                <p>1</p>
              </div>
              <div className="icon">
                {heart}
                <p>16</p>
              </div>
              <div className="icon">
                {fleche}
                <p className="none">0</p>
              </div>
            </div>
          </div>
          {flecheBottom}
        </div>
        <div className="hr"></div>
        <div className="listTweet home">
          {profile}
          <div className="contain">
            <div className="profile">
              <p className="name">Justin</p>
              <p className="grey">@SKT-hffg</p>
              <p className="grey">3m</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis consequat lorem, at suscipit magna. Quisque
              eleifend non felis in ullamcorper. Sed tincidunt quam eu quam
              tincidunt consequat. Pellentesque sodales egestas consectetur.
              Pellentesque quis scelerisque nunc. Pellentesque lacinia
              consectetur tristique. Ut congue, urna in auctor lacinia, orci
              nulla tempus erat, tempor convallis felis erat vel dolor. Proin
              rutrum commodo neque non condimentum. Donec aliquam vel neque ac
              egestas. Sed quis orci quis nisi convallis egestas. Sed vestibulum
              porta ex, ac porta nisi elementum id.
            </p>
            <div className="icons">
              <div className="icon">
                {message}
                <p>3</p>
              </div>
              <div className="icon">
                {fleches}
                <p>1</p>
              </div>
              <div className="icon">
                {heart}
                <p>16</p>
              </div>
              <div className="icon">
                {fleche}
                <p className="none">0</p>
              </div>
            </div>
          </div>
          {flecheBottom}
        </div>
        <div className="hr"></div>
        <div className="listTweet home">
          {profile}
          <div className="contain">
            <div className="profile">
              <p className="name">Justin</p>
              <p className="grey">@SKT-hffg</p>
              <p className="grey">3m</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse quis consequat lorem, at suscipit magna. Quisque
              eleifend non felis in ullamcorper. Sed tincidunt quam eu quam
              tincidunt consequat. Pellentesque sodales egestas consectetur.
              Pellentesque quis scelerisque nunc. Pellentesque lacinia
              consectetur tristique. Ut congue, urna in auctor lacinia, orci
              nulla tempus erat, tempor convallis felis erat vel dolor. Proin
              rutrum commodo neque non condimentum. Donec aliquam vel neque ac
              egestas. Sed quis orci quis nisi convallis egestas. Sed vestibulum
              porta ex, ac porta nisi elementum id.
            </p>
            <div className="icons">
              <div className="icon">
                {message}
                <p>3</p>
              </div>
              <div className="icon">
                {fleches}
                <p>1</p>
              </div>
              <div className="icon">
                {heart}
                <p>16</p>
              </div>
              <div className="icon">
                {fleche}
                <p className="none">0</p>
              </div>
            </div>
          </div>
          {flecheBottom}
        </div>
      </div>
        </>
    )
  };
}

  export default Home;