import React, {Component} from 'react';
import '../styles/Skip.css';

export default class Skip extends Component {
    
    onClick = () => {
        /* To be implemented */
        
    }

    render(){
        return (
            <div className="Skip">
                <div className="Button" onClick={this.onClick}>
                    <h3>
                     Press Here To Skip    
                    </h3>
                </div>
            </div>
        );
    }
}