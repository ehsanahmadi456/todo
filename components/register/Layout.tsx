import { ReactNode } from 'react';
import Head from 'next/head';

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
            <div>
                <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 690" xmlns="http://www.w3.org/2000/svg" className="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient" x1="24%" y1="7%" x2="76%" y2="93%"><stop offset="5%" stop-color="#9900ef"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,175 0,175 C 198.8,153.66666666666669 397.6,132.33333333333334 548,128 C 698.4,123.66666666666666 800.4000000000001,136.33333333333331 941,147 C 1081.6,157.66666666666669 1260.8,166.33333333333334 1440,175 C 1440,175 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.4" class="transition-all duration-300 ease-in-out delay-150 path-0"></path><defs><linearGradient id="gradient" x1="24%" y1="7%" x2="76%" y2="93%"><stop offset="5%" stop-color="#9900ef"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,350 0,350 C 192,362.6666666666667 384,375.33333333333337 531,368 C 678,360.66666666666663 780,333.3333333333333 924,327 C 1068,320.6666666666667 1254,335.33333333333337 1440,350 C 1440,350 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="0.53" class="transition-all duration-300 ease-in-out delay-150 path-1"></path><defs><linearGradient id="gradient" x1="24%" y1="7%" x2="76%" y2="93%"><stop offset="5%" stop-color="#9900ef"></stop><stop offset="95%" stop-color="#8ED1FC"></stop></linearGradient></defs><path d="M 0,700 C 0,700 0,525 0,525 C 182,490.73333333333335 364,456.46666666666664 543,471 C 722,485.53333333333336 898,548.8666666666667 1047,566 C 1196,583.1333333333333 1318,554.0666666666666 1440,525 C 1440,525 1440,700 1440,700 Z" stroke="none" stroke-width="0" fill="url(#gradient)" fill-opacity="1" className="transition-all duration-300 ease-in-out delay-150 path-2"></path></svg>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout