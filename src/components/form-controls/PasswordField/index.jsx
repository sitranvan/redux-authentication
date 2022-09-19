import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { FormHelperText, OutlinedInput } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

function PasswordField({ form, name, label, disable }) {

    const [showPassword, setShowPassword] = useState(false)
    const handleClickShowPassword = () => {
        setShowPassword(pass => !pass)
    }


    return (
        <FormControl fullWidth variant="outline" margin='normal' size='small'>
            <InputLabel sx={{ mt: -1, ml: 2 }} htmlFor={name}>{label}</InputLabel>
            <Controller
                name={name}
                control={form.control}
                render={({ field: { onChange, onBlur, name, value }, fieldState: { invalid, error } }) => (
                    <>
                        <OutlinedInput
                            id={name}
                            type={showPassword ? 'text' : 'password'}
                            label={label}
                            value={value}
                            onBlur={onBlur}
                            onChange={onChange}
                            error={invalid}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText error={invalid}>{error?.message}</FormHelperText>
                    </>
                )}
            />

        </FormControl >
    )
}

export default PasswordField