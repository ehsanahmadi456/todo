import { ChangeEvent } from "react"
import { TextField } from '@mui/material'
import { useTheme } from "next-themes"

interface IProps {
    placeholder: string,
    disabled?: boolean,
    name: string,
    value: string,
    type: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

function Field({ disabled, placeholder, name, value, onChange, type }: IProps) {

    const { theme } = useTheme();

    return (
        <TextField
            className='w-full dark:!bg-quinary rounded-xl dark:!text-primary'
            sx={{
                '.css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled': {
                    WebkitTextFillColor: theme === 'light' ? '#3E3E3E' : '#FFFFFF'
                },
                '.css-1n4twyu-MuiInputBase-input-MuiOutlinedInput-input': {
                    color: theme !== 'light' ? '#9C9C9C' : ''
                },
                '.css-946hkh-MuiFormLabel-root-MuiInputLabel-root': {
                    color: theme !== 'light' ? '#9C9C9C' : ''
                },
                '.MuiInputBase-root': { borderRadius: 3 },
                '&:hover fieldset': {
                    borderColor: 'rgba(0, 0, 0, 0.23) !important',
                },
            }}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
            value={value}
            label={name}
            size="small"
            name={name}
            type={type}
        />
    )
}

export default Field