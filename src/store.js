import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './duck/reducer'

const store = createStore(reducer.quotes, composeWithDevTools())
window.store = store

export default store