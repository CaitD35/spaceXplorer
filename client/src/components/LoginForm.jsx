import React, { useState } from 'react';

const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1000);
  };

 
  const handleSignUp = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1000);
  };

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome, {username}!</h1>
      ) : (
        <>
          <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
          <button onClick={toggleForm}>
            Switch to {isLogin ? 'Sign Up' : 'Login'}
          </button>
          <form onSubmit={isLogin ? handleLogin : handleSignUp}>
            {!isLogin && (
              <div>
                <label>Email</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
            )}
            <div>
              <label>Username</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
            </div>
            <div>
              <label>Password</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
          </form>
        </>
      )}
    </div>
  );
};

export default LoginForm;













