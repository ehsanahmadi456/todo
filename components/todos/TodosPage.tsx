import { Cards, Todos } from '@/globalTypes';

import TimelineIcon from '@mui/icons-material/Timeline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertInvitationRoundedIcon from '@mui/icons-material/InsertInvitationRounded';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import Card from './Card';
import Image from 'next/image';
import List from './List';
import { Title } from '@/mui/customize';

function TodosPage() {

    const listCard: Cards[] = [
        { title: 'Point', detail: '+5', icon: <TimelineIcon className='!text-svg' /> },
        { title: 'Location', detail: 'Iran', icon: <LocationOnIcon className='!text-svg' /> },
        { title: 'Date', detail: '2023/07', icon: <InsertInvitationRoundedIcon className='!text-svg' /> },
        { title: 'List Todo', detail: '7', icon: <FormatListNumberedRoundedIcon className='!text-svg' /> },
    ]

    const listTodos: Todos[] = [
        { id: 1, title: 'Work', detail: 'von 10 uhr bis 12 uhr muss ich arbeite', status: 'd' },
        { id: 2, title: 'Draussen', detail: 'gehe sie nach draussen und trink etwas', status: 'f' },
        { id: 3, title: 'Freundin', detail: 'Sehe sie ihre Freundin', status: 't' },
        { id: 4, title: 'Kaufen', detail: 'kaufe mir etwas aus der Apotheke', status: 'f' },
        { id: 5, title: 'Work', detail: 'von 10 uhr bis 12 uhr muss ich arbeite', status: 'd' },
        { id: 6, title: 'Draussen', detail: 'gehe sie nach draussen und trink etwas', status: 'f' },
        { id: 7, title: 'Freundin', detail: 'Sehe sie ihre Freundin', status: 't' },
        { id: 8, title: 'Kaufen', detail: 'kaufe mir etwas aus der Apotheke', status: 'n' },
    ]

    return (
        <div>
            <div className='flex items-start my-4 gap-4'>
                <ul className='grid grid-cols-4 gap-4 w-3/4'>
                    {listCard.map((card, idx) => <Card key={idx} {...card} />)}
                </ul>
                <div className='w-1/4'>
                    <Image
                        className='w-full p-4 shadow rounded-2xl'
                        src='/images/todo3.png'
                        height={1000}
                        width={700}
                        alt='todo'
                    />
                </div>
            </div>
            <div>
                <Title className='!text-dark-500 mb-4 ml-4 mt-8'>Todos</Title>
                <List listTodos={listTodos} />
            </div>
        </div>
    )
}

export default TodosPage