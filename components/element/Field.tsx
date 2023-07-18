import { Todos } from "@/models"
import { Input } from "@/mui/customize"

function Field({ placeholder, name, value, onChange }: Todos) {
    return (
        <Input
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            name={name}
        />
    )
}

export default Field