import { Cards, Todos } from '@/globalTypes';
import Card from './Card';
import Image from 'next/image';
import List from './List';
import { Title } from '@/mui/customize';
import { CircularProgress } from '@mui/material';

import TimelineIcon from '@mui/icons-material/Timeline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';

interface IProps {
    todos: Todos[],
    search: string | string[],
    country: string,
    isLoading: boolean,
    getTodo: () => void
}

function TodosPage({ todos, country, isLoading, search, getTodo }: IProps) {

    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let formattedDate = year + '/' + month;

    const listCard: Cards[] = [
        {
            title: 'Point',
            detail: todos && todos.length === 0 ? 0 : todos?.filter(item => item.status === 'f').length,
            icon: <TimelineIcon className='!text-svg dark:!text-primary' />
        },
        {
            title: 'Location',
            detail: country,
            icon: <LocationOnIcon className='!text-svg dark:!text-primary' />
        },
        {
            title: 'Date',
            detail: formattedDate,
            icon: <InsertInvitationRoundedIcon className='!text-svg dark:!text-primary' />
        },
        {
            title: 'List Todo',
            detail: `+${todos && todos.length || ''}`,
            icon: <FormatListNumberedRoundedIcon className='!text-svg dark:!text-primary' />
        },
    ]

    return (
        <div>
            <div className='flex flex-col sm:flex-row items-start my-4 gap-4'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4 w-full sm:w-1/2 lg:w-3/4'>
                    {listCard.map((card, idx) => <Card key={idx} {...card} />)}
                </ul>
                <div className='w-full sm:w-1/2 lg:w-1/4'>
                    <Image
                        className='w-full p-4 shadow dark:!bg-quinary dark:!shadow-dark-500 rounded-2xl'
                        src='/images/todo3.png'
                        height={1000}
                        width={700}
                        alt='todo'
                    />
                </div>
            </div>
            <div className='grid'>
                <Title className='!text-dark-500 mb-4 ml-4 mt-8 dark:!text-dark-400'>Todos</Title>
                {!isLoading ? (
                    <div className='overflow-auto'>
                        <List listTodos={todos} getTodo={getTodo} search={search} />
                    </div>
                ) : (
                    <div className='min-h-[200px] flex justify-center items-center'>
                        <CircularProgress className='!text-tertiary' />
                    </div>
                )}
            </div>
        </div>
    )
}

export default TodosPage