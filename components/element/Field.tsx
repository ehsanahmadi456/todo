import { Input } from "@/mui/customize"
import { ChangeEvent } from "react"

interface IProps {
    placeholder: string,
    disabled?: boolean,
    name: string,
    value: string,
    type: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
}

function Field({ disabled, placeholder, name, value, onChange, type }: IProps) {
    return (
        <Input
            className='w-full'
            sx={{
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