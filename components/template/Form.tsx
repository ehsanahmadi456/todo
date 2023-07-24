import { ChangeEvent, Dispatch, SetStateAction } from "react"
import { Todos } from "@/globalTypes"
import Field from "../element/Field";
import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Detail } from "@/mui/customize";

interface IProps {
    from: string,
    data: Todos,
    setData: Dispatch<SetStateAction<Todos>>
}

interface Status {
    codeColor: string
    bgColor: string,
    status: string,
    color: string,
}

function Form({ from, data, setData }: IProps) {

    const status: Status[] = [
        { status: 'Finished', bgColor: 'bg-success', color: 'text-success', codeColor: '#16E25D' },
        { status: 'Doing', bgColor: 'bg-progress', color: 'text-progress', codeColor: '#FF7310' },
        { status: 'Not Finished', bgColor: 'bg-error', color: 'text-error', codeColor: '#FF0707' },
        { status: 'Todo', bgColor: 'bg-disable', color: 'text-disable', codeColor: '#B8B8B8' }
    ]

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        setData({ ...data, [e.target.name]: e.target.value });

    return (
        <div className="mt-4">
            <Detail className="!mb-2 !mt-2">Caption: </Detail>
            <div className="flex flex-row !mt-4 items-start gap-7">
                <Field disabled={from === 'detail'} type='text' placeholder='Title...' name='title' value={data.title} onChange={changeHandler} />
                <Field disabled={from === 'detail'} type='text' placeholder='Detail' name='detail' value={data.detail} onChange={changeHandler} />
            </div>
            <FormControl>
                <Detail className="!mb-2 !mt-6">Status: </Detail>
                <RadioGroup
                    name='status'
                    value={data.status}
                    onChange={changeHandler}
                    className="!flex !flex-col !gap-4 !ml-4"
                >
                    {status.map((item, idx) => (
                        <FormControlLabel
                            disabled={from === 'detail'}
                            key={idx}
                            className={`!${item.bgColor} ${item.color} !py-2 !pl-2 !pr-4 !rounded-2xl`}
                            control={
                                <Radio
                                    className={`!px-0 !py-0 !mr-2 ${item.color}`}
                                    sx={{
                                        '&, &.Mui-checked': {
                                            color: item.codeColor,
                                        },
                                    }}
                                />
                            }
                            label={item.status}
                            value={item.status[0].toLowerCase()}
                        />
                    ))}
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default Form