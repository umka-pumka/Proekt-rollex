import { useState } from 'react';
import "../user.css";
import Login from '../login/Login';

const Register = () => { 
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Name:', name);
    console.log('Password:', password);
  };

  const toggleForms = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <>
      {showLoginForm ? (
        <Login openRegisterModal={toggleForms} />
      ) : (
        <form className="user" onSubmit={handleSubmit}>
          <h1>Регистрация</h1>
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
            <label>Имя:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
          <button type="submit">Зарегистрироваться</button>
          <p>
            У вас есть аккаунт? <span onClick={toggleForms} style={{ cursor: 'pointer', color: 'blue' }}>Войти</span>
          </p>
        </form>
      )}
    </>
  );
};

export default Register;
