import React from 'react';
import { IAuth } from '../interfaces/auth.interfaces';
import AuthForm from '../components/forms/AuthForm';

const Register:React.FC = () => {
    const onSubmit = (formData: IAuth) => {
        console.log(formData)
      }
    
    return <AuthForm type='register' onSubmit={onSubmit} />
}

export default Register;