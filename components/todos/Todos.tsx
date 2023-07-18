import { Cards } from '@/models';

import TimelineIcon from '@mui/icons-material/Timeline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Todos() {

    const listCard: Cards[] = [
        { title: 'Point', detail: '+5', icon: <TimelineIcon /> },
        { title: 'Location', detail: 'Iran, Tehran', icon: <LocationOnIcon /> }
        { title: 'Date', detail: '2023/07/06', icon: <LocationOnIcon /> }
    ]

    return (
        <>
            Todos
        </>
    )
}

export default Todos