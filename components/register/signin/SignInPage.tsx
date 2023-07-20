import { useState, ChangeEvent } from 'react';
import { Caption, Detail, Head, Title } from "@/mui/customize"
import { Button } from '@mui/material'
import Link from 'next/link';
import Input from '../Input';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

function SignInPage() {

  const [data, setData] = useState({
    email: '', password: ''
  })

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  return (
    <div className="p-5 flex flex-col justify-center items-center h-full w-full px-10">
      <Title className="!text-light-tertiary w-full text-left">Sign In:</Title>
      <div className="w-20 h-1 bg-light-tertiary mr-auto rounded-2xl my-2"></div>
      <div className="flex items-start justify-center flex-col w-full mt-12">
        <Head className="!text-dark-500">Hey, Hello 👋</Head>
        <Caption>Enter the information you entered while registering</Caption>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center w-full my-6">
        <Input value={data.email} type='text' name='email' placeholder='you@example.com' changeHandler={changeHandler}>
          <MailOutlineOutlinedIcon className='bg-primary h-10 w-10 rounded-lg p-[9px] -translate-x-2 !text-light-tertiary' fontSize='small' />
        </Input>
        <Input value={data.password} type='password' name='password' placeholder='*******' changeHandler={changeHandler}>
          <KeyOutlinedIcon className='bg-primary h-10 w-10 rounded-lg p-[9px] -translate-x-2 !text-light-tertiary' fontSize='small' />
        </Input>
      </div>
      <Button
        className="!bg-light-tertiary !text-primary rounded-lg"
        variant="contained"
        color="success"
        size='large'
        fullWidth
      >SignIn</Button>
      <div className='flex items-center justify-center mt-8'>
        <Detail className='!text-dark-200'>Don't you have an account? </Detail>
        <Link href='/signup'>
          <Detail className='ml-1 text-light-tertiary'>SignUp</Detail>
        </Link>
      </div>
    </div>
  )
}

export default SignInPage