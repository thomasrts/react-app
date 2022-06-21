import Home from './Home/Home';
import '../App.css';
import RightPart from './RightPart/RightPart';
import LeftPart from './LeftPart/LeftPart';
import React from "react";
import axios from "axios";
import $ from "jquery";


class Homepage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tweets:[]
        }

    }

    async componentDidMount() {

        await axios({
            url:'http://localhost:3001/v1/tweets',
            method:"GET",
            headers:{
                'Authorization': "W9mVzVm1BVWe2O0EGmT7ta03HT7JQf52"
            }
        }).then((response) => {
            let json = response.data
            this.setState({
                tweets: json
            })
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
