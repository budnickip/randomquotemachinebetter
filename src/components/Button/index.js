import React, { Component } from 'react';
import './index.scss'

class Button extends Component{
    render(){
        return(
            <div className="buttons"> 
                <a className="buttons__quote" href="#">tweet-quote</a>
                <button className="buttons__new-quote" onClick={this.props.click}>{this.props.text}</button>
            </div>
        )
    }
}

export default Button