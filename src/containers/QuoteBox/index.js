import React, { Component } from 'react';
import styled from 'styled-components'
import './index.css'
import RandomText from '../../components/RandomText'
import Button from '../../components/Button'


class QuoteBox extends Component{

    state = {
         quotes: [],
         quote: {},
         colors:['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857", "#474699", "#78FE3F", "#023424", "#A55922"],
         color: ''
    }

    random = () => {
        this.setState({
            quote: this.state.quotes[Math.floor(Math.random() * ( this.state.quotes.length -1)) + 1],
            color: this.state.colors[Math.floor(Math.random() * (this.state.colors.length-1)) + 1]
        })
        document.documentElement.style
        .setProperty('--change-color', this.state.color);
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
        <div id="quote-box" class="quote-box">
            <RandomText quote={this.state.quote} />
            <Button click={this.random}/>
        </div>
      )
    }
  }

export default QuoteBox