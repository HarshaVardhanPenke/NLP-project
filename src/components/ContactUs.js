import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
    marginBottom: '5px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px'
  };

  const containerStyle = {
    maxWidth: '600px',
    margin: ' auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    border: '2px',
    borderColor: '#ccc',
    position:'relative',
    top:'100px',
    borderRadius: '5px',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.5)',
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
    <div style={containerStyle}>
      <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Contact Us</h1>
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
        <button type='submit' style={buttonStyle}>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;