import { ChangeEvent, useState } from "react"
import { Todos } from "@/models"
import Field from "../element/Field";

interface IProps {
    from: string,
    data?: Todos
}

function Form({ from }: IProps) {

    const [data, setData] = useState({
        title: 'Work', detail: 'von 1 uhr bis 3 uhr ich habe gearbeitet', status: 'f'
    });

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        setData({ ...data, [e.target.name]: e.target.value });

    return (
        <div className="flex flex-col items-start">
            <Field placeholder={'Title...'} name='title' value={data.title} onChange={changeHandler} />
            <Field placeholder={'Detail'} name='title' value={data.title} onChange={changeHandler} />
        </div>
    )
}

export default Form