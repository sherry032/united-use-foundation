import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { createUser } from '../../services/users';

const defaultFormData = {
    name: '',
    email: ''
};

function JoinUsPage() {
  const [formData, setFormData] = useState(defaultFormData);
  const [showMsg, setShowMsg] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await createUser(formData);
      setShowMsg(true);
      setFormData(defaultFormData)
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
      {showMsg && <Typography sx={{color: "red", mt: 5}}>
        Thanks for submitting the form.
      </Typography>}
    </Container>
  );
}

export default JoinUsPage;
