import React, { useState } from 'react';
import { TextField, Button, Container, Snackbar, Alert, Box, Typography } from '@mui/material';
import { createUser } from '../../services/users';

const defaultFormData = {
    firstName: '',
    lastName: '',
    school: "",
    grade: "",
    typesOfVolunteering: "",
    phoneNumber: ""
  };
  
  function JoinUsPage() {
    const [formData, setFormData] = useState(defaultFormData);
    const [open, setOpen] = useState(false);

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
      handleOpen();
      setFormData(defaultFormData)
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleOpen = () => setOpen(true);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  
  return (
    <Container maxWidth="sm">
        <Box my={2}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to UYF!
        </Typography>
        <Typography variant="body1" gutterBottom>
          ATTENTION: After filling out this form, message our Instagram account or one of the founders (Kelly or Johanna) to be invited into our group chat on Discord.
        </Typography>
        <Typography variant="body1" color="textSecondary" gutterBottom>
          *Being in the group chat is mandatory for all members as most of our event announcements will be posted via Discord*
        </Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="First name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="School"
          name="school"
          value={formData.school}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Grade"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="What are some types of volunteering activities that interest you? (This can be general)"
          name="typesOfVolunteering"
          value={formData.typesOfVolunteering}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Phone number"
          name="phoneNumber"
          type="text"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{my: 2}}
        >
          Submit
        </Button>
      </form>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Thank you for joining our organization!
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default JoinUsPage;
