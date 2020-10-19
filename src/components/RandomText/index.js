import React, { Component } from 'react';
import './index.css'

class RandomText extends Component{
    render(){

        console.log(this.props.color)
        return(
            <div id="text">
                <p class="quote-text">{this.props.quote.quote}</p>
                <p class="quote-author">{this.props.quote.author}</p>
            </div>
        )
    }
}

export default RandomText