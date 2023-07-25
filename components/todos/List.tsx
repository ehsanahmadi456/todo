import { useState } from 'react';
import { Todos } from "@/globalTypes"
import { Tooltip, CircularProgress } from '@mui/material';
import Link from "next/link";

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import { Caption, Detail } from "@/mui/customize";
import request from '@/services/request';

interface IProps {
    search: string,
    listTodos: Todos[],
    getTodo: () => void
}

function List({ search, listTodos, getTodo }: IProps) {

    const headTable: string[] = ['ID', 'Title', 'Detail', 'Status', 'View']
    const [idDelete, setIdDelete] = useState<string>();

    const deleteHandler = (id: string) => {
        setIdDelete(id)
        request.deleteTodo(id)
            .then(() => {
                setIdDelete(null)
                getTodo()
            })
    }


    if (listTodos && listTodos.length) {
        return (
            <table className="w-full table-auto	">
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
                        <tr key={idx} className="border-0 border-b border-b-dark-400 dark:!border-b-dark-500">
                            <td className="text-center p-4">
                                <Detail className='dark:!text-dark-400'>#{idx + 1}</Detail>
                            </td>
                            <td className="text-center p-4">
                                <Detail className='dark:!text-dark-400'>{todo.title}</Detail>
                            </td>
                            <td className="p-4">
                                <Detail className='dark:!text-dark-400'>{todo.detail}</Detail>
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
                                        <Link href={`/detail/${todo._id}`}>
                                            <DescriptionOutlinedIcon className="!text-light-tertiary" />
                                        </Link>
                                    </Tooltip>
                                    <Tooltip title="edit" placement="top">
                                        <Link href={`/edit/${todo._id}`}>
                                            <ModeEditOutlineOutlinedIcon className="!text-light-tertiary" />
                                        </Link>
                                    </Tooltip>
                                    <Tooltip title="delete" placement="top">
                                        {todo._id === idDelete ? (
                                            <CircularProgress className="!w-[23px] !h-[23px] !text-tertiary" />
                                        ) : (
                                            <div onClick={() => deleteHandler(todo._id)}>
                                                <DeleteOutlinedIcon
                                                    className="!text-light-tertiary"
                                                />
                                            </div>
                                        )}
                                    </Tooltip>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    } else {
        return (
            <>
                {search ? (
                    <Detail className="!text-tertiary text-center mt-10">
                        No Todo found with this title or detail name
                    </Detail>
                ) : (
                    <Detail className="!text-tertiary text-center mt-10">
                        There is no todo
                    </Detail>
                )}
            </>
        )
    }
}

export default List