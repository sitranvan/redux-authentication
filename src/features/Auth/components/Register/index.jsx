import { unwrapResult } from '@reduxjs/toolkit'
import { useDispatch } from "react-redux"
import { toast } from 'react-toastify'
import { register } from '../../userSlice'
import RegisterForm from './RegisterForm'
function Register({ closeDialog }) {
    const dispatch = useDispatch()
    const handleSubmitForm = async (values) => {
        try {
            // auto set username = email => quy ước của người thiết kế api 
            values.username = values.email
            const action = register(values)
            const resultAction = await dispatch(action)
            unwrapResult(resultAction)
            // close dialog
            closeDialog && closeDialog()
            // show message
            toast.success('Register successfully')
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <RegisterForm onSubmitForm={handleSubmitForm} />
    )
}

export default Register