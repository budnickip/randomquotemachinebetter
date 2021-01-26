import React, { Component } from 'react';
import styled from 'styled-components'
import './index.css'
import RandomText from '../../components/RandomText'
import Button from '../../components/Button'

import { connect } from 'react-redux';
import reducer from '../../duck/reducer'
import actions from '../../duck/actions'

class QuoteBox extends Component{

    constructor(props) {
      super(props);
    }

    state = {
         quotes: [],
         quote: {},
         colors:['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857", "#474699", "#78FE3F", "#023424", "#A55922"],
         color: '',
         displayed: 1
    }

    random = (event) => {
        if(this.state.displayed == this.props.quotes.length-1){
          this.setState({
            displayed: this.state.displayed+1,
            quote: this.state.quotes[Math.floor(Math.random() * ( this.state.quotes.length -1)) + 1],
            color: this.state.colors[Math.floor(Math.random() * (this.state.colors.length-1)) + 1]
        })
        document.documentElement.style
        .setProperty('--change-color', this.state.color);
        event.preventDefault()
        this.props.add(this.state.quote)
        }else{
          this.setState({
            quote: this.props.quotes[this.state.displayed],
            displayed: this.state.displayed +1
          })
        }
    }

    previous = () => {
        this.setState({
          quote: this.props.quotes[this.state.displayed],
          displayed: this.state.displayed - 1
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
            this.props.add(this.state.quote)
            this.setState({
              displayed: this.state.displayed +1
            })
          })
    }
    render(){
      return(
        <div id="quote-box" className="quote-box">
            <RandomText quote={this.state.quote} />
            <Button click={this.random} text="Nex Quote" />
            <Button click={this.previous} text="Previous Quote" />
        </div>
      )
    }
  }

const mapDispatchToProps = dispatch => ({
  add: quote => dispatch(actions.add(quote))
})

const mapStateToProps = state => ({
  quotes: state.quotes
})

export default connect(mapStateToProps, mapDispatchToProps)(QuoteBox)