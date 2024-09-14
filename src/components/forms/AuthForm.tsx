import { Button, TextField, Typography } from '@mui/material';
import React, { FormEvent, useState } from 'react'
import { IAuth } from '../../interfaces/auth.interfaces';

interface AuthFormProps {
    type: string,
    onSubmit: (formData: IAuth) => void
}

const AuthForm:React.FC<AuthFormProps> = ({type, onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({email, password})
        setEmail('')
        setPassword('')
    }

  return (
    <form onSubmit={handleSubmit} style={{width: '500px', margin: '50px auto', display: 'flex', flexDirection: 'column'}}>
        <Typography style={{marginBottom: '10px'}}>{type === 'login' ? 'Login' : 'Register'}</Typography>

        <TextField
            style={{marginBottom: '5px'}}
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant='outlined'
            type='email'
            fullWidth
            required
        />

        <TextField
            style={{marginBottom: '5px'}}
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant='outlined'
            type='password'
            fullWidth
            required
        />

        <Button type='submit'>
            <Typography>
                {type === 'login' ? 'Login' : 'Register'}
            </Typography>
        </Button>
    </form>
  )
}

export default AuthForm;