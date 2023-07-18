import { ReactNode } from "react"
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
        <div className="bg-dark-600 flex m-3">
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <title>{title} | Todo Eh</title>
            </Head>
            <aside>
                <Aside />
            </aside>
            <main className="min-w-[calc(100%-417px)]">
                <header>
                    <Header />
                </header>
                <section>
                    {children}
                </section>
            </main>
            <div>
                <Profile />
            </div>
        </div>
    )
}

export default Layout