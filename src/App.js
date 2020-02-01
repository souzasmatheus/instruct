import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import './App.scss';
import Card from './components/Card';

function App() {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await Axios.get(
          'http://jsonplaceholder.typicode.com/users'
        );

        console.log(result);

        setUsers(result.data);
      } catch (e) {
        setError('Um erro ocorreu. Por favor, recarregue a aplicação.');
      }
    })();
  }, []);

  const cards = users
    .filter(user => {
      const emailSufix = user.email.split('@')[1];
      return emailSufix.includes(`.${query.toLowerCase()}`) ? true : false;
    })
    .map(({ name, username, email, address, phone, website }, index) => (
      <Card
        key={`card-${index + 1}`}
        name={name}
        username={username}
        email={email}
        address={address}
        phone={phone}
        website={website}
      />
    ));

  return (
    <div className="App">
      <header className="input-label-container">
        <label htmlFor="query">Insira um sufixo de e-mail:</label>
        <div className="input-btn-container">
          <p>.</p>
          <input
            onChange={e => setQuery(e.target.value)}
            type="text"
            placeholder=""
          />
        </div>
      </header>

      <section className="cards-container">
        {error && <p className="error-message">{error}</p>}
        {cards}
      </section>
    </div>
  );
}

export default App;
