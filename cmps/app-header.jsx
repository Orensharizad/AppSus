const { Link, NavLink } = ReactRouterDOM
const { useState, useEffect } = React

import { AppNavLink } from "./app-nav-link.jsx"


export function AppHeader() {
    const [onOpenMenu, setOnMenuOpen] = useState(false)

    return <section>

        <header className="app-header ">
            <Link to="/">
                <h3 className="app-logo">AppSus</h3>
            </Link>
            <div onClick={() => setOnMenuOpen(!onOpenMenu)} className="menu-bar">
                <img src="assets/img/menu-icon.png" alt="" />
            </div>
        </header>
        {onOpenMenu && <div className="menu-open">
            <AppNavLink setOnMenuOpen={setOnMenuOpen} />
        </div>}
    </section>
}


