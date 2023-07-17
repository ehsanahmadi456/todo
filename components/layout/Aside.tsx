import { Title } from '@/mui/customize';
import Item from './item/Item';
import Links from '@/models';
import Link from 'next/link';

import ClearAllIcon from '@mui/icons-material/ClearAll';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import { useRouter } from 'next/router';

function Aside() {

  const setColor = (isActive: boolean) => isActive ? '#5C27FE' : '#FFFFFF'

  const router = useRouter();

  const listLink: Links[] = [
    {
      title: 'Todos',
      path: '/',
      icon: <FormatListBulletedOutlinedIcon style={{ color: setColor(router.pathname === '/') }} fontSize='small' />
    },
    {
      title: 'Add Todo',
      path: '/add-todo',
      icon: <AddRoundedIcon style={{ color: setColor(router.pathname === '/add-todo') }} fontSize='small' />
    },
    {
      title: 'Profile',
      path: '/profile',
      icon: <PersonOutlineOutlinedIcon style={{ color: setColor(router.pathname === '/profile') }} fontSize='small' />
    },
    {
      title: 'About',
      path: '/about',
      icon: <InfoIcon style={{ color: setColor(router.pathname === '/about') }} fontSize='small' />
    },
  ]

  return (
    <div
      className='bg-gradient-to-br from-[#C165DD] to-[#5C27FE] sticky h-[calc(100vh-24px)] left-0 top-3 w-48 rounded-2xl 
      overflow-hidden py-3 pl-5'
    >
      <Link href='/'>
        <Title className='!mx-auto text-center mt-12'>
          Todo EH
          <ClearAllIcon />
        </Title>
      </Link>
      <span className='w-[calc(100%-20px)] bg-primary h-0.5 block rounded-2xl my-12'></span>
      <ul>
        {listLink.map((link, idx) => (
          <Item key={idx} {...link} />
        ))}
      </ul>
    </div>
  )
}

export default Aside;