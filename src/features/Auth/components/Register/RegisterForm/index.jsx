import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { LockClockOutlined } from '@mui/icons-material';
import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import InputField from '../../../../../components/form-controls/InputField';
import PasswordField from '../../../../../components/form-controls/PasswordField';


function RegisterForm({ onSubmitForm }) {
    const schema = yup.object({
        fullname: yup.string().trim()
            .required('Please enter your fullname')
            .test('should has at least two words', 'Please enter at least two words', (values) => {
                return values.split(' ').length >= 2
            }),
        email: yup.string().trim()
            .required('Please enter your fullname')
            .email('Please enter a valid email address'),

        password: yup.string().trim()
            .required('Please enter your password')
            .min(6, 'Please enter at least 6 character')
            .matches(/(?=.*?[A-Z])/, 'At least one capitalized word'),

        retypePassword: yup.string().trim()
            .required('Please enter your retype password')
            .oneOf([yup.ref('password'), null], 'Passwords must match')

    }).required();

    const form = useForm({
        // name Input phải trùng với defaultValues
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            retypePassword: ''
        },
        resolver: yupResolver(schema)
    })
    const handleSubmit = async (values) => {
        if (onSubmitForm) {
            await onSubmitForm(values) // callback value
        }
    }
    const { isSubmitting } = form.formState

    return (
        <Box sx={{ textAlign: 'center' }}>
            {isSubmitting && <LinearProgress color='secondary' />}
            <Avatar sx={{ m: '8px auto 8px auto', bgcolor: 'secondary.main' }}><LockClockOutlined /></Avatar>
            <Typography p='15px 0' component="h3" variant='h5'>Create An Account</Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField form={form} name="fullname" label="Full Name" />
                <InputField form={form} name="email" label="Emaill" />
                <PasswordField form={form} name="password" label="Password" />
                <PasswordField form={form} name="retypePassword" label="Retype Password" />
                <Button disabled={isSubmitting} type='submit' fullWidth size='large' sx={{ display: 'block', m: '20px auto 0 auto' }} color='secondary' variant='contained'>Create an account</Button>
            </form>
        </Box>
    )
}

export default RegisterForm