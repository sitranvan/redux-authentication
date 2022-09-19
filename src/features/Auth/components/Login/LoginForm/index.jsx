import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import { LockClockOutlined } from '@mui/icons-material';
import { Avatar, Button, LinearProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import InputField from '../../../../../components/form-controls/InputField';
import PasswordField from '../../../../../components/form-controls/PasswordField';


function LoginForm({ onSubmitForm }) {
    const schema = yup.object({
        identifier: yup.string().trim() // identifier===name===email do API phía backend viết
            .required('Please enter your fullname')
            .email('Please enter a valid email address'),
        password: yup.string().trim()
            .required('Please enter your password')
    }).required();

    const form = useForm({
        // name Input phải trùng với defaultValues
        defaultValues: {
            identifier: '',
            password: '',
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
            <Typography component="h3" variant='h5' p='15px 0'>Sign In</Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField form={form} name="identifier" label="Email" />
                <PasswordField form={form} name="password" label="Password" />
                <Button disabled={isSubmitting} type='submit' fullWidth size='large' sx={{ display: 'block', m: '20px auto 0 auto' }} color='secondary' variant='contained'>Sign In</Button>
            </form>
        </Box >
    )
}

export default LoginForm