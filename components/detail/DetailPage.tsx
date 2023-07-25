import { useState } from "react";
import { Title } from "@/mui/customize"
import { useRouter } from "next/router"
import Form from "../template/Form"
import { Button } from "@mui/material"
import { Todos } from "@/globalTypes";
import Link from "next/link";

interface IProps {
    todo: Todos
}

function DetailPage({ todo }: IProps) {

    const router = useRouter()
    const id = router.query.todoId || ''

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<Todos>({
        title: todo.title, detail: todo.detail, status: todo.status
    });

    return (
        <>
            <Title className="!text-dark-500 !mt-4">Todo ID: #{id[0] || ''}</Title>
            <Form from='detail' data={data} setData={setData} />
            <div className="flex items-center justify-between !mt-8">
                <Link href='/'>
                    <Button
                        className='!bg-light-tertiary !text-primary'
                        variant="contained"
                        color="success"
                    >Back</Button>
                </Link>
            </div>
        </>
    )
}

export default DetailPage