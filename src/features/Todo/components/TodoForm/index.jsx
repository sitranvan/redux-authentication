import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputField from '../../../../components/form-controls/InputField';


function TodoForm({ onSubmitForm }) {
    const schema = yup.object({
        title: yup.string().required('Please enter title todo'),
    }).required();

    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema)
    })
    const handleSubmit = (values) => {
        onSubmitForm(values) // callback value
        form.reset()
    }
    return (
        <form onSubmit={form.handleSubmit(handleSubmit)} style={{ width: 350, margin: '0 auto' }}>
            <InputField form={form} name="title" label="Todo" />
        </form>
    )
}

export default TodoForm