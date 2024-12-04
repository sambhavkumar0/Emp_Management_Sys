import React, { useState } from 'react';

const LoginRegisterPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register forms
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Login logic
      const storedUser = JSON.parse(localStorage.getItem(username));
      if (storedUser && storedUser.password === password) {
        window.location.href = 'http://localhost:3000/';
      } else {
        setError('Invalid username or password.');
      }
    } else {
      // Registration logic
      const existingUser = localStorage.getItem(username);
      if (existingUser) {
        setError('Username already exists.');
      } else {
        const newUser = { username, password };
        localStorage.setItem(username, JSON.stringify(newUser));
        window.location.href = 'http://localhost:3000/';
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isLogin ? 'Login' : 'Register'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 focus:outline-none"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">
            {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
            <button
              onClick={toggleForm}
              className="text-indigo-600 font-semibold ml-2"
            >
              {isLogin ? 'Register here' : 'Login here'}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;
