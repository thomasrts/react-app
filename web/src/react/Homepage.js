import Home from './Home/Home';
import '../App.css';
import RightPart from './RightPart/RightPart';
import LeftPart from './LeftPart/LeftPart';
import React from "react";
import $ from "jquery";


class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tweets:[]
        }
    }

    async componentDidMount() {
        let response = await fetch('http://localhost:3001/v1/tweets', {
            method: 'GET',
            headers: {
                'Authorization': "W9mVzVm1BVWe2O0EGmT7ta03HT7JQf52"
            }
        })

        let json = await response.json()


        this.setState({
            tweets: json
        })
        /*$.ajax({
        url:'http://localhost:3001/v1/tweets',
        method:'GET', // or 'PUT'
        headers: {
            'Authorization': 'W9mVzVm1BVWe2O0EGmT7ta03HT7JQf52'
        },
        success: function(data){
            this.setState({
                tweets: data
            })
        }
    })*/
    }

    render() {
        return (
            <div className='homepage'>
                <LeftPart className='leftPart'/>
                <Home className='homePart' tweets={this.state.tweets}/>
                <RightPart className='rightPart'/>
            </div>
        );
    }
}

export default Homepage;
