import React, { Component} from 'react';
import '../styles/Candy.css';

export default class Candy extends Component {
/*
Candy Component:
    ==> When a candy is clicked on, it is chosen as a the vote.
    ==> a photo is displayed    
*/
    constructor(props) {
        super(props);

        this.state = {
            name: props.name,
            imgUrl: props.imgUrl
        }
    }
    
    onClick = () => {
        /* submit button and reset */
    }
    
    render() {
        return (
            <div className="Candy">
                <h3 className="Name">{this.props.name}</h3>
                <div className="Photo">
                    <img src={this.props.imgUrl} alt=""></img>
                </div>
            </div>
        );
    }
}