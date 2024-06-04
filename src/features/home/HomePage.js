import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import aboutUsImage from './about_us.jpg';

function HomePage() {
  return (
    <Container>
      <Box my={1}>
        <Paper elevation={3}>
          <Box p={3}>
            <img src={aboutUsImage} alt="Group photo" style={{ width: '100%', borderRadius: '10px' }} />
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              In founding UYF, our organization is dedicated to leveraging our resources to uplift the underprivileged. We are driven by our commitment to serving those in need and making a tangible difference in their lives. Through UYF, our primary aim is to use our collective efforts and resources to provide assistance and support to those facing adversity in our community and hopefully beyond. We recognize the importance of reaching out to those who may be marginalized or underserved and are determined to make a meaningful impact by offering our assistance and resources where they are most needed.
            </Typography>
            <Typography variant="body1" paragraph>
              When you join UYF, you join a team committed to practical action. Together, we leverage our resources, skills, and determination to create positive change. We welcome you to join our mission and contribute to our community's improvement. Together, we can achieve real results. Join UYF today and help us make a genuine difference, step by step.
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default HomePage;
