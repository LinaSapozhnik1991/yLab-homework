import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      mockFetch(email, password).then(response => {
          setMessage(response.message);
      });
  };

  const mockFetch = (email, password) => {
      return new Promise((resolve) => {
          setTimeout(() => {
              if (email === "test@example.com" && password === "password") {
                  resolve({ message: "Успешный вход!" });
              } else {
                  resolve({ message: "Неверный email или пароль." });
              }
          }, 1000);
      });
  };

  return (
      <div className="container">
          <h2>Вход в аккаунт</h2>
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                  />
              </div>
              <div className="form-group">
                  <label htmlFor="password">Пароль:</label>
                  <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                  />
              </div>
              <button type="submit">Войти</button>
          </form>
          <div id="message">{message}</div>
      </div>
  );
};
export default App;
