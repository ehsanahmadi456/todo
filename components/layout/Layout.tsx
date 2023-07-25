import { ReactNode, useEffect } from "react"
import Aside from "./Aside"
import Head from "next/head"
import Profile from "./Profile"
import Header from "./Header"

interface IProps {
    children: ReactNode,
    title: string
}

function Layout({ children, title }: IProps) {
    return (
        <div className="bg-dark-600 dark:bg-quaternary flex m-3">
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>{`${title} | Todo Eh`}</title>
            </Head>
            <aside>
                <Aside />
            </aside>
            <main className="w-full">
                <header
                    className="sticky right-0 top-3 shadow-[0_-12px_0_#FFFFFF] 
                    dark:!shadow-[0_-12px_0_#18181D] w-full bg-primary z-20"
                >
                    <div>
                        <Header />
                    </div>
                </header>
                <section className="px-4">
                    {children}
                </section>
            </main>
            <div className="hidden lg:flex">
                <Profile />
            </div>
        </div>
    )
}

export default Layout