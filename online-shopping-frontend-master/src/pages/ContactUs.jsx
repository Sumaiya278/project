import React from 'react';

const Contact = () => {
  const containerStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center'
  };

  const listItemStyle = {
    marginBottom: '20px' // Increased margin bottom for more space
  };

  return (
    <div style={containerStyle}>
      <h1>Contact Us</h1>
      <p>For any inquiries or support, please contact us:</p>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={listItemStyle}>
          <strong>Email:</strong> <a href="Email:sumaiyasaid54@gmail.com">sumaiyasaid54@gmail.com</a>
        </li>
        <li style={listItemStyle}>
          <strong>Instagram:</strong> <a href="https://www.instagram.com/Sumai_ya2673/" target="_blank">@Sumai_ya2673</a>
        </li>
        
        <li style={listItemStyle}>
          <strong>WhatsApp:</strong> <a href="https://wa.me/0786625361" target="_blank">0786 625 361</a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
