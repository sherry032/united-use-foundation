import React, { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

function JoinUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formDataEntries = Object.entries(formData);
    const formParams = new URLSearchParams();
    
    formDataEntries.forEach(([key, value]) => {
      formParams.append(key, value);
    });
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwMYCzxSCx_DSMrT6Wsw0j2qvdwClTJy5KFaA9gw6o2oD_JjVRSTbt27SdoiWsk1YWG/exec', {
        method: 'POST',
        body: formParams,
        mode: 'no-cors'
      });
  
      if (response.ok) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={{ marginTop: '20px' }}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default JoinUsPage;
