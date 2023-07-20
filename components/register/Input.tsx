import { ChangeEvent, ReactNode } from 'react'
import { TextField } from '@mui/material'
import { InputAdornment } from '@mui/material';

interface IProps {
  name: string,
  type: string,
  value: string,
  placeholder: string,
  children: ReactNode,
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void,
}

function Input({ children, name, type, value, changeHandler, placeholder }: IProps) {
  return (
    <div className='flex flex-col items-start justify-center w-full'>
      <TextField
        fullWidth
        name={name}
        type={type}
        value={value}
        variant="standard"
        onChange={changeHandler}
        placeholder={placeholder}
        className='bg-dark-500 !p-3 rounded-xl'
        InputProps={{
          startAdornment: (
            <InputAdornment position="end">
              {children}
            </InputAdornment>
          ),
          disableUnderline: true,
        }}
      />
    </div>
  )
}

export default Input