import { Title } from "@/mui/customize"
import { useRouter } from "next/router"
import Form from "../template/Form"
import { Button } from "@mui/material"

function DetailPage() {

    const router = useRouter()

    return (
        <>
            <Title className="!text-dark-500 !mt-4">Todo ID: #{router.query.detailId && router.query.detailId[1] || ''}</Title>
            <Form from='edit' />
            <div className="flex items-center justify-between !mt-8">
                <Button
                    variant="outlined"
                    color="success"
                >Cancel</Button>
                <Button
                    className="!bg-light-tertiary !text-primary"
                    variant="contained"
                    color="success"
                >Update</Button>
            </div>
        </>
    )
}

export default DetailPage