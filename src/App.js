import React from 'react';
import logo from './logo.svg';
import './App.css';

import pictures from './external';

class App extends React.Component {
  render() {
  return (
    <div className="App">
     <h1>🤝 I have won React! 🌟</h1>
     {
       pictures.map((pic) => {
         return (
           <img src={pic.url} />
         )
       })
     }
    </div>
  );
  }
}

export default App;
