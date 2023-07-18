import { Title } from "@/mui/customize"
import { useRouter } from "next/router"
import Form from "../template/Form"

function DetailTodo() {

    const router = useRouter()

    return (
        <>
            <Title className="!text-dark-500 !mt-4">Todo ID: #{router.query.detailId && router.query.detailId[1] || ''}</Title>
            <Form from='edit' />
        </>
    )
}

export default DetailTodo