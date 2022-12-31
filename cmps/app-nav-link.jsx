
const { Link, NavLink } = ReactRouterDOM


export function AppNavLink() {



    return (

        <div className="app-nav-link">

            <NavLink to="/mail">
                <img className="nav-item" src="assets/img/Gmail_icon_(2020).svg.png" alt="" />
            </NavLink>
            <NavLink to="/note">
                <img className="nav-item" src="assets/img/keeps.png" alt="" />
            </NavLink>
            <NavLink to="/">
                <i className=" nav-item fa-solid fa-2x fa-house"></i>
            </NavLink>
            <NavLink to="/about">
                <i className=" nav-item fa-solid fa-2x fa-info"></i>
            </NavLink>


        </div>
    )
}
