const { NavLink, Link } = ReactRouterDOM



export function Home() {

    return <section className="home">
        <h1>Welcome to home page!</h1>
        <button> <Link to={"/note"}>Notes </Link></button>
        <button><Link to={"/mail"}>Gmail </Link></button>



    </section>
}