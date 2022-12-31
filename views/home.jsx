const { NavLink, Link } = ReactRouterDOM



export function Home() {

    return <section className="home main-layout">
        <div className="home-header">


            <h1 className="home-title">Welcome to AppSus</h1>
            <p className="sec-home-title">
                An application for managing emails and notes
            </p>

        </div>
        <div className="home-services">
            <div className="services-container">
                <div className="home-service-card">
                    <Link to={"/mail"}> <img src="assets/img/sprint 3 gmail icon.png" alt="" /></Link>
                    <h1>Gmail</h1>
                    <p> Gmail (pronounced Gee-mail) is a free web-based email service that provides users with 15 GB of storage for messages and the ability to search for specific messages. The Gmail program also automatically organizes successively related messages into a conversational thread.</p>

                </div>
                <div className="home-service-card">
                    <Link to={"/note"}><img src="assets/img/keeps.png" alt="" /> </Link>
                    <h1>Notes</h1>
                    <p>A note taking application from Google for the Chrome browser, Android and iOS. Keep is a rather simplistic application that allows notes to be organized in folders (labels) and archived, similar to Gmail, as well as easily shared with others. Images can be inserted. Reminders can also be set.</p>


                </div>

            </div>


        </div>




    </section>
}