import { Todos } from "@/globalTypes"
import { Input } from "@/mui/customize"

function Field({ placeholder, name, value, onChange, type }: Todos) {
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