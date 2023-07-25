import { Title } from "@/mui/customize"
import Form from "../template/Form"
import { Button } from "@mui/material"
import { useState } from "react";
import { Todos } from "@/globalTypes";
import request from "@/services/request";
import { LoadingButton } from "@mui/lab";

function AddTodoPage() {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [data, setData] = useState<Todos>({
        title: '', detail: '', status: 'f'
    });

    const cancelHandler = () => setData({ title: '', detail: '', status: 'f' });

    const addHandler = async () => {
        setIsLoading(true)
        const { title, detail, status } = data
        request.addTodo(title, detail, status)
            .then(() => {
                setIsLoading(false)
                cancelHandler()
            })
    }

    return (
        <div className="mt-4">
            <Title className="!text-dark-500 dark:!text-dark-400">Add Todo</Title>
            <Form from='add' data={data} setData={setData} />
            <div className="flex items-center justify-between !mt-8">
                <Button
                    className="dark:!text-light-tertiary dark:border-light-tertiary"
                    onClick={cancelHandler}
                    variant="outlined"
                    color="success"
                >Cancel</Button>
                <LoadingButton
                    onClick={addHandler}
                    loading={isLoading}
                    className={!isLoading && '!bg-light-tertiary !text-primary'}
                    variant="contained"
                    color="success"
                >Add</LoadingButton>
            </div>
        </div>
    )
}

export default AddTodoPage