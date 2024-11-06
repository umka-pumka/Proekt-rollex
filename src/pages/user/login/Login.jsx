import { useState } from 'react';
import "../user.css";
import Register from '../regis/Register';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };
  const toggleForms = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      {showLoginForm ? (
        <Register openRegisterModal={toggleForms} />
      ) : (
        <form className="user" onSubmit={handleSubmit}>
          <h1>Войти</h1>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Пароль:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Войти</button>
          <p>
            Нет аккаунта? <span onClick={toggleForms} style={{ cursor: 'pointer', color: 'blue' }}>Регистрация</span>
          </p>
        </form>
      )}
    </>
  );
};

export default Login;
