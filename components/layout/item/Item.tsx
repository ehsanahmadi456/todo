import { useRouter } from 'next/router';
import { SmText } from '@/mui/customize';
import Link from 'next/link';
import { ReactElement } from 'react';

interface Interface {
    title: string,
    path: string,
    openAside: boolean,
    icon: ReactElement
}

function Item({ title, icon, path, openAside }: Interface) {

    const router = useRouter()

    return (
        <Link href={path}>
            <li
                className={`
                relative flex items-center justify-start gap-2 my-2 w-full py-3 pl-4 bg-transparent rounded-l-2xl before:absolute 
                before:w-8 before:h-8 before:-top-8 before:right-0 before:rounded-br-3xl after:absolute 
                after:w-8 after:h-8 after:-bottom-8 after:right-0 after:rounded-tr-3xl
                ${path === '/' &&
                        (
                            router.pathname === '/[[...index]]' ||
                            router.pathname === '/detail/[...todoId]' ||
                            router.pathname === '/edit/[...todoId]'
                        ) ||
                        router.pathname === path ?
                        '!bg-primary dark:!bg-quaternary before:bg-transparent dark:before:!shadow-[5px_5px_0_5px_#18181D] before:shadow-[5px_5px_0_5px_#FFFFFF] dark:after:!shadow-[5px_-5px_0_5px_#18181D] after:shadow-[5px_-5px_0_5px_#FFFFFF]' :
                        ''}
                    `}
            >
                {icon}
                {!!openAside && (
                    <SmText
                        className={`hidden sm:flex ${path === '/' &&
                            (
                                router.pathname === '/[[...index]]' ||
                                router.pathname === '/detail/[...todoId]' ||
                                router.pathname === '/edit/[...todoId]'
                            ) ||
                            router.pathname === path ? '!text-tertiary dark:!text-dark-300' : ''}`}>
                        {title}
                    </SmText>
                )}
            </li>
        </Link>
    )
}

export default Item