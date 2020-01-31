import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card
        name="Matheus"
        username="souzasmatheus"
        email="matheu.sk.9@hotmail.com"
        telephone="22988144983"
        website="www.souzasmatheus.com.br"
        address="Rua Prudente de Moraes, 299"
      />
    </div>
  );
}

export default App;
