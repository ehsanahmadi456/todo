import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip, Button } from '@mui/material';
import { BgButton, Caption, Detail } from '@/mui/customize';

import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

function Profile() {

    const [tooltip, setTooltip] = useState('copy!')

    const copyHandler = () => {
        setTooltip('copied')
        const text = "example@email.com";
        navigator.clipboard.writeText(text)
            .then(() => {
                setTimeout(() => {
                    setTooltip('copy!')
                }, 2000);
            })
    }

    return (
        <div
            className='bg-dark-300 sticky h-fit right-0 top-3 w-56 rounded-2xl 
            overflow-hidden pt-3 pb-5 px-5 flex flex-col'
        >
            <div className="mt-8 flex items-center justify-between px-4">
                <Tooltip title={tooltip} onClick={copyHandler} placement="top">
                    <ContentCopyOutlinedIcon fontSize='small' style={{ color: '#8293A1', width: 17, height: 17 }} />
                </Tooltip>
                <Image
                    className='rounded-full border-4 border-dark-400 shadow-xl'
                    src='/images/ehsan.jpg'
                    width={70}
                    height={70}
                    alt='profile'
                />
                <NotificationsNoneOutlinedIcon fontSize='small' style={{ color: '#8293A1' }} />
            </div>
            <div className='mt-5'>
                <Detail className='!text-center'>Welcome Ehsan!</Detail>
                <Caption className='!text-center mb-3'>Front-End Developer</Caption>
            </div>
            <div className='flex items-center gap-2 mt-5'>
                <Button className='!text-sm !rounded-xl !border !border-solid !border-dark-300 !w-full !text-dark-200 py-2 font-medium'>
                    <Link href='/profile'>
                        Logout
                        <LogoutRoundedIcon fontSize='small' className='ml-2' />
                    </Link>
                </Button>
                <Link href='/profile'>
                    <BgButton className='!p-2' color='secondary' variant='text'>
                        <BorderColorRoundedIcon style={{ width: 18, height: 18 }} fontSize='small' />
                    </BgButton>
                </Link>
            </div>
        </div>
    )
}

export default Profile