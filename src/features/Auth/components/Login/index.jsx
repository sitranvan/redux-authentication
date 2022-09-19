import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import { login } from '../../userSlice'
import LoginForm from './LoginForm'

function Login({ closeDialog }) {
    const dispatch = useDispatch()

    const handleSubmitForm = async (values) => {
        try {
            // auto set username = email => quy ước của người thiết kế api 
            values.username = values.email
            const action = login(values)
            const resultAction = await dispatch(action)
            unwrapResult(resultAction)
            // close dialog
            closeDialog && closeDialog()
            toast.success('Login successfully')
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <LoginForm onSubmitForm={handleSubmitForm} />
    )
}

export default Login