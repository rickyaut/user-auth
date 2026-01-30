import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import { useAuth } from '../AuthContext';

const Profile: React.FC = () => {
  const { user, signout } = useAuth();

  return (
    <Paper sx={{ p: 3, mt: 2 }}>
      <Typography variant="h4" gutterBottom>Profile</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Full Name: {user?.fullname}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Email: {user?.email}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Phone: {user?.phone}
      </Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        User ID: {user?.id}
      </Typography>
      <Button variant="outlined" onClick={signout}>
        Sign Out
      </Button>
    </Paper>
  );
};

export default Profile;