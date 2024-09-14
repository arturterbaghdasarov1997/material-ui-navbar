import React from 'react';
import { Grid2, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AuthButtons:React.FC = () => {
    const navigate = useNavigate()

  return (
    <Grid2 container spacing={2} style={{width: '200px', marginRight: '15px'}}>
        <Grid2 size={6}>
            <Button
                onClick={() => navigate('/login')}
                variant='contained'
                style={{background: 'white', color: '#1976D2'}}
            >
                <Typography>Login</Typography>
            </Button>
        </Grid2>
        <Grid2 size={6}>
            <Button
                onClick={() => navigate('/register')}
                variant='contained'
                style={{background: 'white', color: '#1976D2'}}
            >
                <Typography>Register</Typography>
            </Button>
        </Grid2>
    </Grid2>
  )
}

export default AuthButtons;