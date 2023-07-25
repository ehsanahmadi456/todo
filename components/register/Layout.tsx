import { ReactNode } from 'react';
import Head from 'next/head';

import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded';
import { SmText, Head as HeadText, Title } from '@/mui/customize';

interface IProps {
    children: ReactNode,
    title: string
}

function Layout({ children, title }: IProps) {
    return (
        <div className="flex items-center justify-center">
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>{title} | Todo Eh</title>
            </Head>
            <div
                className='h-screen hidden relative w-1/2 bg-light-tertiary sm:flex flex-col items-center justify-center
                rounded-tr-[150px] after:absolute after:w-[150px] after:h-[150px] after:-bottom-0 after:-right-[150px]
                after:rounded-bl-[150px] after:bg-transparent after:shadow-[-50px_50px_0_50px_#8D67FE] 
                dark:after:!shadow-[-50px_50px_0_50px_#4620B7]'
            >
                <div className='flex flex-col items-center justify-center'>
                    <ClearAllRoundedIcon
                        className='!w-24 !h-24 text-primary border border-primary rounded-full p-2'
                        fontSize='large'
                    />
                    <HeadText className='!mt-4'>Todo EH</HeadText>
                    <SmText className='!text-primary !mt-2'>
                        coded and designed with ❤️ by
                        <a href='https://www.linkedin.com/in/ehsan-ahmadi-62219023b/' target='_blank'>  Ehsan</a>
                    </SmText>
                </div>
                <div className='w-1/2 h-1 bg-primary rounded-2xl my-5'></div>

            </div>
            <div className='h-screen w-full sm:w-1/2'>
                {children}
            </div>
        </div>
    )
}

export default Layout