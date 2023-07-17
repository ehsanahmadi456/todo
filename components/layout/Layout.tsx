import { ReactNode } from "react"
import Aside from "./Aside"
import Head from "next/head"
import Profile from "./Profile"

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
            <main>
                <header>Todo EH</header>
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