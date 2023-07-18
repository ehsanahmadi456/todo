import { BgButton, Form } from '@/mui/customize';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';

import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

function Header() {
    return (
        <div className="flex items-center justify-between px-4 w-full bg-primary p-4">
            <div className='flex items-center gap-2'>
                <BgButton className='!p-2'>
                    <KeyboardDoubleArrowLeftRoundedIcon color='secondary' />
                </BgButton>
                <Form
                    placeholder='Search...'
                    variant="standard"
                    className='!w-96'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        disableUnderline: true,
                    }}
                />
            </div>
            <Link href='/add-todo'>
                <BgButton color='secondary' className='!px-3'>
                    <AddRoundedIcon className='!bg-light-100-tertiary !rounded-lg !mr-2' />
                    New Todo
                </BgButton>
            </Link>
        </div>
    )
}

export default Header