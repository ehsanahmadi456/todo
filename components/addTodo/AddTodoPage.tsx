import { Title } from "@/mui/customize"
import Form from "../template/Form"
import { Button } from "@mui/material"

function AddTodoPage() {
    return (
        <div className="mt-4">
            <Title className="!text-dark-500">Add Todo</Title>
            <Form from='add' />
            <div className="flex items-center justify-between !mt-8">
                <Button
                    variant="outlined"
                    color="success"
                >Cancel</Button>
                <Button
                    className="!bg-light-tertiary !text-primary"
                    variant="contained"
                    color="success"
                >Add</Button>
            </div>
        </div>
    )
}

export default AddTodoPage