import React, { useState } from 'react';
import { Container, Box, Tabs, Tab, CircularProgress } from '@mui/material';
import { AuthProvider, useAuth } from './AuthContext';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';

const AuthTabs: React.FC = () => {
  const [tab, setTab] = useState<number>(0);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={tab} onChange={(e, newValue: number) => setTab(newValue)} centered>
        <Tab label="Sign In" />
        <Tab label="Sign Up" />
      </Tabs>
      <Box sx={{ mt: 2 }}>
        {tab === 0 && <SignIn />}
        {tab === 1 && <SignUp onSuccess={() => setTab(0)} />}
      </Box>
    </Box>
  );
};

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 8 }}>
        {user ? <Profile /> : <AuthTabs />}
      </Box>
    </Container>
  );
};

const App: React.FC = () => (
  <AuthProvider>
    <AppContent />
  </AuthProvider>
);

export default App;