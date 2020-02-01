import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.scss';
import Card from './components/Card';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await Axios.get(
          'http://jsonplaceholder.typicode.com/users'
        );

        console.log(result);

        setUsers(result.data);
      } catch (e) {
        // setError('An error occurred. Please, reload application.');
      }
    })();
  }, []);

  const cards = users.map(
    ({ name, username, email, address, phone, website }, index) => (
      <Card
        key={`card-${index + 1}`}
        name={name}
        username={username}
        email={email}
        address={address}
        phone={phone}
        website={website}
      />
    )
  );

  return (
    <div className="App">
      <header className="input-label-container">
        <label htmlFor="query">Insira um sufixo de e-mail:</label>
        <div className="input-btn-container">
          <p>.</p>
          <input type="text" placeholder="" />
        </div>
      </header>

      <section className="cards-container">{cards}</section>
    </div>
  );
}

export default App;
