import { ChangeEvent, useState } from 'react';
import { BgButton, Form } from '@/mui/customize';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { useTheme } from "next-themes";
import { useRouter } from 'next/router';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';

function Header() {

    const router = useRouter();
    const { theme, setTheme } = useTheme();

    const [search, setSearch] = useState<string>('');
    const currentTheme = theme === 'light' ? true : false

    const changeTheme = () =>
        setTheme(theme === 'light' ? 'dark' : 'light');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        setSearch(e.target.value);

    const searchHandler = () =>
        router.push({
            pathname: "/",
            query: { search }
        })

    return (
        <div
            className="flex flex-col justify-center items-start gap-2 sm:flex-row sm:items-center sm:justify-between
            px-4 w-full bg-primary dark:!bg-quaternary p-4"
        >
            <div className='flex items-center gap-2'>
                {currentTheme ? (
                    <div onClick={changeTheme}>
                        <NightlightRoundIcon />
                    </div>
                ) : (
                    <div onClick={changeTheme}>
                        <LightModeIcon />
                    </div>
                )}
                <Form
                    value={search}
                    onChange={changeHandler}
                    placeholder='Search...'
                    variant="standard"
                    className='!w-full lg:!w-[350px] dark:!bg-quinary'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <div onClick={searchHandler}>
                                    <SearchIcon
                                        className='!text-primary !bg-light-tertiary h-7 w-7 rounded-[10px] p-[3px]'
                                    />
                                </div>
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