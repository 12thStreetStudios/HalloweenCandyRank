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
            imgUrl: props.imgUrl,
            pressed: 'no'
        }
    }
    
    onClick = () => {
        
    }
    
    render() {
        return (
            <div className="Candy" onClick={this.onClick}>
                <h3 className="Name" >
                    {this.state.name}
                </h3>
                <div className="Photo">
                    <img src={this.props.imgUrl} alt=""></img>
                </div>
            </div>
        );
    }
}