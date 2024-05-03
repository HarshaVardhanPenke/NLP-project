import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    // If validation fails, display error messages
    // If validation passes, submit the form
  };

  const inputStyle = {
    margin: '5px 0',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box'
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginRight: '10px',
    display: 'block',
    marginBottom: '5px',
    color: '#333'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '30px'
  };

  const containerStyle = {
  
    maxWidth: '600px',
    margin: 'auto',
    padding: '40px',
    backgroundColor: '#fff',
    border: '2px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const formStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  };

  const inputContainerStyle = {
    position: 'relative',
    width: '100%',
    marginBottom: '10px'
  };

  return (
    <div className="my-10 p-20"style={containerStyle}>
      <h1 className="text-3xl font-semibold"style={{ marginBottom: '20px', textAlign: 'center' }}>Contact Us</h1>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Name:</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Email:</label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            required
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Phone Number:</label>
          <input
            type='tel'
            name='phoneNumber'
            value={formData.phoneNumber}
            onChange={handleChange}
            style={inputStyle}
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
          <small style={{ marginLeft: '10px' }}>Format: 123-456-7890</small>
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Message:</label>
          <textarea
            name='message'
            value={formData.message}
            onChange={handleChange}
            style={{ ...inputStyle, height: '100px' }}
            required
          />
        </div>
        <button type='submit' style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;