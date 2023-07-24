import { useState, ChangeEvent } from 'react';
import { Caption, Detail, Head, Title } from "@/mui/customize"
import LoadingButton from '@mui/lab/LoadingButton';
import request from '@/services/request';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Input from '../Input';

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';

function SignUpPage() {

  const router = useRouter();

  const [data, setData] = useState({
    firstName: '', email: '', password: ''
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const signupHandler = async () => {
    setIsLoading(true)
    const { firstName, email, password } = data
    request.signUp(firstName, email, password)
      .then(res => {
        setData({ firstName: '', email: '', password: '' })
        setIsLoading(false)
        res && res.status && typeof res.status === 'string' && res.status === 'success' && router.push('/signin')
      })
  }

  return (
    <div className="p-5 flex flex-col justify-center items-center h-full w-full px-10">
      <Title className="!text-light-tertiary w-full text-left">Sign Up:</Title>
      <div className="w-20 h-1 bg-light-tertiary mr-auto rounded-2xl my-2"></div>
      <div className="flex items-start justify-center flex-col w-full mt-12">
        <Head className="!text-dark-500">Hey, Hello 👋</Head>
        <Caption>Enter the information for signup</Caption>
      </div>
      <div className="flex flex-col gap-4 items-center justify-center w-full my-6">
        <Input value={data.firstName} type='text' name='firstName' placeholder='name' changeHandler={changeHandler}>
          <PersonOutlineOutlinedIcon className='bg-primary h-10 w-10 rounded-lg p-2 -translate-x-2 !text-light-tertiary' fontSize='small' />
        </Input>
        <Input value={data.email} type='email' name='email' placeholder='you@example.com' changeHandler={changeHandler}>
          <MailOutlineOutlinedIcon className='bg-primary h-10 w-10 rounded-lg p-[9px] -translate-x-2 !text-light-tertiary' fontSize='small' />
        </Input>
        <Input value={data.password} type='password' name='password' placeholder='*******' changeHandler={changeHandler}>
          <KeyOutlinedIcon className='bg-primary h-10 w-10 rounded-lg p-[9px] -translate-x-2 !text-light-tertiary' fontSize='small' />
        </Input>
      </div>
      <LoadingButton
        onClick={signupHandler}
        className={`rounded-lg ${!isLoading && '!bg-light-tertiary !text-primary'}`}
        loading={isLoading}
        variant="contained"
        color="success"
        size='large'
        fullWidth
      >
        SignUp
      </LoadingButton>
      <div className='flex items-center justify-center mt-8'>
        <Detail className='!text-dark-200'>Already have an account? </Detail>
        <Link href='/signin'>
          <Detail className='ml-1 text-light-tertiary'>SignIn</Detail>
        </Link>
      </div>
    </div>
  )
}

export default SignUpPage