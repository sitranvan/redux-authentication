import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';
import './styles.scss'

function InputField({ form, name, label, disable }) {
    return (
        <Controller
            name={name}
            control={form.control}
            render={({
                field: { onChange, onBlur, value, name },
                fieldState: { invalid, error }
            }) => (
                <TextField
                    size='small'
                    className='todo-input'
                    onBlur={onBlur}
                    onChange={onChange}
                    label={label}
                    name={name}
                    value={value}
                    disable={disable}
                    error={invalid}
                    helperText={error?.message}
                    variant='outlined'
                    margin='normal'
                    sx={{ width: '100%' }}
                />
            )}
        />
    )
}

export default InputField