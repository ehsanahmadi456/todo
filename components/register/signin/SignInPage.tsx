import { useState, ChangeEvent } from 'react';
import { Caption, Detail, Head, Title } from "@/mui/customize"
import { signIn } from "next-auth/react";
import LoadingButton from '@mui/lab/LoadingButton';
import { useRouter } from 'next/router';
import { toast } from "react-toastify";
import Link from 'next/link';
import Input from '../Input';

import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

function SignInPage() {

  const router = useRouter();

  const [data, setData] = useState({
    email: '', password: ''
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const signinHandler = (e) => {
    const { email, password } = data
    setIsLoading(true)
    signIn('credentials', {
      email, password, redirect: false
    })
      .then(res => {
        setIsLoading(false)
        if (!res.error) router.push('/')
      })
    e.preventDefault();
  }

  return (
    <div className="p-5 flex flex-col justify-center items-center h-full w-full px-10">
      <Title className="!text-light-tertiary w-full text-left">Sign In:</Title>
      <div className="w-20 h-1 bg-light-tertiary mr-auto rounded-2xl my-2"></div>
      <div className="flex items-start justify-center flex-col w-full mt-12">
        <Head className="!text-dark-500 dark:!text-dark-400">Hey, Welcome 👋</Head>
        <Caption className='dark:!text-dark-300'>Enter the information you entered while registering</Caption>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center w-full my-6">
        <Input value={data.email} type='text' name='email' placeholder='you@example.com' changeHandler={changeHandler}>
          <MailOutlineOutlinedIcon className='bg-primary !h-10 !w-10 rounded-lg p-[9px] -translate-x-2 !text-light-tertiary' fontSize='small' />
        </Input>
        <Input value={data.password} type='password' name='password' placeholder='*******' changeHandler={changeHandler}>
          <KeyOutlinedIcon className='bg-primary !h-10 !w-10 rounded-lg p-[9px] -translate-x-2 !text-light-tertiary' fontSize='small' />
        </Input>
      </div>
      <LoadingButton
        onClick={signinHandler}
        className={`rounded-lg ${!isLoading && '!bg-light-tertiary !text-primary'}`}
        loading={isLoading}
        variant="contained"
        color="success"
        size='large'
        fullWidth
      >SignIn</LoadingButton>
      <div className='flex items-center justify-center mt-8'>
        <Detail className='!text-dark-200'>Don't you have an account? </Detail>
        <Link href='/signup'>
          <Detail className='!ml-1 !text-light-tertiary'>SignUp</Detail>
        </Link>
      </div>
    </div>
  )
}

export default SignInPage;