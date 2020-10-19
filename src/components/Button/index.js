import React, { Component } from 'react';

class Button extends Component{
    render(){
        return(
            <div> 
                <a id="tweet-quote" href="#">tweet-quote</a>
                <button id="new-quote" onClick={this.props.click}>new quote</button>
            </div>
        )
    }
}

export default Button