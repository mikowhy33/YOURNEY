
import { useState } from 'react';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks'; 
import { setCredentials } from '../features/auth/authSlice'; 

export const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch(); // Inicjalizacja transmitera

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Symulacja odpowiedzi z serwera 
    const mockToken = 'super-tajny-token-123';
    const mockRole = email.includes('student') ? 'Student' : 'Teacher'; 
    const mockUserName = email.split('@')[0];

    //  Mutacja stanu globalnego 
    dispatch(setCredentials({ 
      token: mockToken, 
      role: mockRole, 
      userName: mockUserName 
    }));

    //Przekierowanie na adres glowny
    navigate('/');
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Paper elevation={3} sx={{ p: 5, maxWidth: 400, width: '100%', textAlign: 'center' }}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 4 }}>Log In</Typography>
        <form onSubmit={handleLogin}>
          <TextField fullWidth label="Email" value={email} onChange={(e) => setEmail(e.target.value)} sx={{ mb: 2 }} required />
          <TextField fullWidth label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} sx={{ mb: 3 }} required />
          <Button type="submit" fullWidth variant="contained" size="large">Sign In</Button>
        </form>
      </Paper>
    </Box>
  );
};