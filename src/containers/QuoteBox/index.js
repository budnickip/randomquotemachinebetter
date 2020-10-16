import React, { Component } from 'react';


class RandomText extends Component{
    render(){
        return(
            <div id="text">
                <p>{this.props.quote.quote}</p>
                <p>{this.props.quote.author}</p>
            </div>
        )
    }
}

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

class QuoteBox extends Component{

    state = {
         number: 0,
         quotes: [],
         quote: {}
    }

    random = () => {
        this.setState({
            number: Math.floor(Math.random() * ( this.state.quotes.length -1)) + 1,
            quote: this.state.quotes[this.state.number]
        })
    }
  
    componentDidMount() {
      fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              quotes: result,
              quote: result[Math.floor(Math.random() * ( result.length -1)) + 1]
            });
          })
    }
    render(){
      return(
        <div id="quote-box">
            <RandomText quote={this.state.quote} />
            <Button click={this.random} />
        </div>
      )
    }
  }

export default QuoteBox