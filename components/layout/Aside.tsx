import { useState } from 'react';
import { BgButton, Title } from '@/mui/customize';
import Item from './item/Item';
import Link from 'next/link';
import { Links } from '@/globalTypes';
import { useRouter } from 'next/router';

import InfoIcon from '@mui/icons-material/InfoOutlined';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';

function Aside() {

  const setColor = (isActive: boolean) => isActive ? '#5C27FE' : '#FFFFFF'
  const [openAside, setOpenAside] = useState<boolean>(true);

  const router = useRouter();

  const listLink: Links[] = [
    {
      title: 'Todos',
      path: '/',
      icon:
        <FormatListBulletedOutlinedIcon
          className='dark:!text-primary'
          style={{ color: setColor(router.pathname === '/' || router.pathname === '/detail/[...todoId]' || router.pathname === '/edit/[...todoId]') }}
          fontSize='small'
        />
    },
    {
      title: 'Add Todo',
      path: '/add-todo',
      icon: <AddRoundedIcon
        fontSize='small'
        className='dark:!text-primary'
        style={{ color: setColor(router.pathname === '/add-todo') }}
      />
    },
    {
      title: 'Profile',
      path: '/profile',
      icon: <PersonOutlineOutlinedIcon
        fontSize='small'
        className='dark:!text-primary'
        style={{ color: setColor(router.pathname === '/profile') }}
      />
    },
    {
      title: 'About',
      path: '/about',
      icon: <InfoIcon
        fontSize='small'
        className='dark:!text-primary'
        style={{ color: setColor(router.pathname === '/about') }}
      />
    },
  ]

  return (
    <div
      className={`bg-gradient-to-br max-w-[80px] sm:max-w-full from-[#C165DD] to-[#5C27FE] 
      sticky h-[calc(100vh-24px)] left-0 top-3 rounded-2xl 
      overflow-hidden py-3 pl-5 transition-all duration-500 ${openAside ? 'w-48' : 'w-20'}`}
    >
      <BgButton
        onClick={() => setOpenAside(!openAside)}
        className={`!p-[5px] hidden sm:flex !absolute !right-2 !top-2 !bg-primary
        dark:!bg-quaternary transition-all ${!openAside && 'rotate-180'}`}
      >
        <KeyboardDoubleArrowLeftRoundedIcon className='!text-tertiary' />
      </BgButton>
      <Link href='/'>
        <div className='flex items-center justify-center gap-2 !mt-12 !pr-3'>
          {!!openAside && (
            <Title className='hidden sm:flex'>
              Todo EH
            </Title>
          )}
          <ClearAllIcon className='!text-primary' />
        </div>
      </Link>
      <span className='w-[calc(100%-20px)] bg-primary dark:!bg-quaternary h-0.5 block rounded-2xl my-12'></span>
      <ul>
        {listLink.map((link, idx) => (
          <Item key={idx} {...link} openAside={openAside} />
        ))}
      </ul>
    </div>
  )
}

export default Aside;