import {createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import types from './types'

const initialState = {
  quotes: [{"quote": "An unexamined life is not worth living.", "author": "Socrates"},
  {"quote": "Eighty percent of success is showing up.", "author": "Woody Allen"}]
  
}

function quotes(state = initialState, action) {
  switch(action.type) {
    case types.ADD:
      return{
        ...state, quotes: [...state.quotes, action.quote]
      }
    case types.RESET:
      return{
        ...state, quotes: []
      }
    default: 
      return state
  }
}



const store = createStore(quotes, composeWithDevTools())
window.store = store

export default {quotes}