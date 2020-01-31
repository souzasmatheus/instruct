import React from 'react';
import './styles.scss';

const Card = ({ name, username, email, phone, website, address }) => (
  <div className="card-container">
    <div className="card-header">
      <p className="name">{name}</p>
      <p className="username">{username}</p>
    </div>
    <div className="card-content">
      <div className="info-group">
        <p>E-mail:</p>
        <p>{email}</p>
      </div>
      <div className="info-group">
        <p>Telefone:</p>
        <p>{phone}</p>
      </div>
      <div className="info-group">
        <p>Website:</p>
        <p>{website}</p>
      </div>
      <div className="info-group">
        <p>Address:</p>
        <p>
          <span>{address.street}, </span>
          <span>{address.suite}</span>
        </p>
      </div>
    </div>
  </div>
);

export default Card;
