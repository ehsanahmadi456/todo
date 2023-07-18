import { Todos } from "@/models"
import { Tooltip } from '@mui/material';
import Link from "next/link";

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import { Caption, Detail } from "@/mui/customize";

function List({ listTodos }: any) {

    const headTable: string[] = ['ID', 'Title', 'Detail', 'Status', 'View']

    return (
        <table className="w-full">
            <thead>
                <tr>
                    {headTable.map((head, idx) => (
                        <th className="p-2" key={idx}>
                            <Caption className="!text-base">{head}</Caption>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {listTodos.map((todo: Todos, idx: number) => (
                    <tr key={idx} className="border-0 border-b border-b-dark-400">
                        <td className="text-center p-4">
                            <Detail>#{todo.id}</Detail>
                        </td>
                        <td className="text-center p-4">
                            <Detail>{todo.title}</Detail>
                        </td>
                        <td className="p-4">
                            <Detail>{todo.detail}</Detail>
                        </td>
                        <td className="text-center p-4">
                            <Detail
                                className={`
                                py-2 px-6 rounded-3xl w-fit mx-auto !text-sm cursor-pointer
                                ${todo.status === 'f' ? 'bg-success text-success' :
                                        todo.status === 'd' ? 'bg-progress text-progress' :
                                            todo.status === 'n' ? 'bg-error text-error' :
                                                todo.status === 't' ? 'bg-disable text-disabg-disable' : ''
                                    }`}
                            >
                                {
                                    todo.status === 'f' ? 'Finished' :
                                        todo.status === 'd' ? 'Doing' :
                                            todo.status === 'n' ? 'Not Finished' :
                                                todo.status === 't' ? 'Todo' :
                                                    'Not Defined'}
                            </Detail>
                        </td>
                        <td className="p-4">
                            <div className="flex items-center justify-center gap-3">
                                <Tooltip title="detail" placement="top">
                                    <Link href={`/detail/${todo.id}`}>
                                        <DescriptionOutlinedIcon className="!text-light-tertiary" />
                                    </Link>
                                </Tooltip>
                                <Tooltip title="edit" placement="top">
                                    <ModeEditOutlineOutlinedIcon className="!text-light-tertiary" />
                                </Tooltip>
                                <Tooltip title="delete" placement="top">
                                    <DeleteOutlinedIcon className="!text-light-tertiary" />
                                </Tooltip>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default List