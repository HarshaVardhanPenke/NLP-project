import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const msg = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password')
    };
    if (password !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      try {
        axios.post("http://localhost:5000/", msg)
        .then(response => {
          console.log(response.data);
          // Redirect to the Login component
           navigate('/login');
        })
        .catch(error => {
          console.error('Error:', error);
        });

      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-10 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-bold mb-8">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="name">Name:</label>
            <input type='text' name='name' className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="email">Email:</label>
            <input type='email' name='email' required className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="password">Password:</label>
            <input
              type='password'
              name='password'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold" htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type='password'
              name='confirmPassword'
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <button type='submit' className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;