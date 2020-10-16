import React, { Component } from 'react';
import './App.css';
import QuoteBox from './containers/QuoteBox'

//na koniec, rozbuduj to o reduxa - dodaj przycisk wcześniejszy cytat
//cytaty które już się pojawiły, zapisuj do state w reduxie i dzięki temu cofaj po tablicy za pomocą reduxa
//reasumując - użytkownik będzie losował nowe cytaty, ale będzie też mógł powrócić do poprzednich, a następnie znów przejść do ostatniego




function App() {


  return (
    <div className="App">
      <QuoteBox />
    </div>
  );
}

export default App;
