import { useRouter } from 'next/router';
import { SmText } from '@/mui/customize';
import { Links } from '@/globalTypes';
import Link from 'next/link';

function Item({ title, icon, path }: Links) {

    const router = useRouter()

    return (
        <Link href={path}>
            <li
                className={`
                relative flex items-center justify-start gap-2 my-2 w-full py-3 pl-4 bg-transparent rounded-l-2xl before:absolute 
                before:w-8 before:h-8 before:-top-8 before:right-0 before:rounded-br-3xl after:absolute 
                after:w-8 after:h-8 after:-bottom-8 after:right-0 after:rounded-tr-3xl
                ${router.pathname === path || (router.pathname === '/detail/[...detailId]' || router.pathname === '/edit/[...detailId]' && path === '/') ?
                        '!bg-primary before:bg-transparent before:shadow-[5px_5px_0_5px_#FFFFFF] after:shadow-[5px_-5px_0_5px_#FFFFFF]' :
                        ''}
                    `}
            >
                {icon}
                <SmText className={`${router.pathname === path || (router.pathname === '/detail/[...detailId]' || router.pathname === '/edit/[...detailId]' && path === '/') ? '!text-tertiary' : ''}`}>
                    {title}
                </SmText>
            </li>
        </Link>
    )
}

export default Item