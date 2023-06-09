import { Suspense } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Loader } from "components/Loader/Loader";
import css from './Layout.module.css'

const Layout = () => {
    return (
        <>
            <header className={css.header}>
                <nav className={css.nav}>
                    <NavLink to={'/cards'} style={{textDecoration: 'none'}}>
                        <span className={css.navlink}>Card List</span>
                    </NavLink>
                    <NavLink to={'/boards'} style={{textDecoration: 'none'}}>
                        <span className={css.navlink}>Kanban Board</span>
                    </NavLink>
                </nav>
            </header>
            <main className={css.main}>
                <Suspense fallback={<Loader />}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}

export default Layout;