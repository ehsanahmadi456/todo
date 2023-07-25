import { useState } from "react";
import { Title } from "@/mui/customize"
import { useRouter } from "next/router"
import Form from "../template/Form"
import { Button } from "@mui/material"
import { Todos } from "@/globalTypes";
import { LoadingButton } from "@mui/lab";
import request from "@/services/request";

interface IProps {
    todo: Todos
}

function EditPage({ todo }: IProps) {

    const router = useRouter()
    const id = router.query.todoId || ''

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<Todos>({
        title: todo.title, detail: todo.detail, status: todo.status
    });

    const updateHandler = () => {
        const { title, detail, status } = data
        setIsLoading(true)
        request.updateTodo(id[0], title, detail, status)
            .then(() => {
                setIsLoading(false)
            })
    }

    return (
        <>
            <Title className="!text-dark-500 !mt-4">Todo ID: #{id[0] || ''}</Title>
            <Form from='edit' data={data} setData={setData} />
            <div className="flex items-center justify-between !mt-8">
                <Button
                    variant="outlined"
                    color="success"
                >Cancel</Button>
                <LoadingButton
                    onClick={updateHandler}
                    className={!isLoading ? '!bg-light-tertiary !text-primary' : ''}
                    loading={isLoading}
                    variant="contained"
                    color="success"
                >Update</LoadingButton>
            </div>
        </>
    )
}

export default EditPage