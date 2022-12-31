const { Outlet, Link, NavLink } = ReactRouterDOM


export function About() {
    return <section className="about">
        <nav>
            <NavLink to="/about/team">Team</NavLink> |
            <NavLink to="/about/vision">Vision</NavLink>
        </nav>
    </section>
}
