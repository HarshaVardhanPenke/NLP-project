import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from 'axios';

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  function handleLogin(e) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = {
      email: formdata.get("email"),
      password: formdata.get("password")
    };

    

    try {
      axios.post("http://localhost:5000/login", data)
        .then(response => {
          console.log(response.data);
          if (response.status === 200) {
            navigate('/body');
          } else {
            setErrorMessage(response.data.message);
          }
        })
        .catch(error => {
          console.error('Error:', error);
          setErrorMessage('An error occurred. Please try again later.');
        });
    } catch (err) {
      console.log(err.message);
      setErrorMessage('An error occurred. Please try again later.');
    }
  }

  return (
    <div className="flex h-screen">
      {/* Left Half: Image */}
      <div className="w-1/2 flex justify-center items-center">
        <img src="https://cdn.glitch.global/a80ff1ac-2a9b-4b16-821d-d8b7d998f50d/pixelcut-export.jpeg?v=1714644094627" alt="NLP Logo" className="h-[100vh]"></img>
      </div>
      {/* Right Half: Form */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="flex flex-col items-center">
          {/* Image */}
          <img src="https://cdn.glitch.global/c008b4b5-2492-4deb-9f9b-deec0c99b570/WhatsApp%20Image%202024-05-01%20at%2014.53.34_f79beb71.jpg?v=1714555453307" alt="Login Image" className="h-48 mb-4"></img>
          {/* Form */}
          <div className="bg-white">
            <form onSubmit={handleLogin} className="w-full">
              <input type='text' placeholder='Email' name='email' className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black'></input>
              <input type='text' placeholder='Password' name='password' className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black'></input>
              <div className="remember-me flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <input type='checkbox' className='mr-2'></input>
                  <span>Remember Me</span>
                </div>
                <div>
                  <Link to='/signup' className='text-blue-500'>Forget Password</Link>
                </div>
              </div>
              {errorMessage && <div className="error-message">{errorMessage}</div>}
              <button className='button w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700'>Login</button>
              <span className='signup mt-4 text-sm'>Don't have a QAcrafter account? <Link to='/signup' className='text-blue-500'>Sign up here</Link></span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
