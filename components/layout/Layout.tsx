import { ReactNode } from "react"

interface IProps {
    children: ReactNode
}

function Layout({ children }: IProps) {
    return (
        <div>
            <header>Todo EH</header>
            <main className="flex items-start">
                <aside>Aside</aside>
                <section>
                    {children}
                </section>
            </main>
        </div>
    )
}

export default Layout