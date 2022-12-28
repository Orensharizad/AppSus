export function MailPreview({ mail }) {
    return <section className={(mail.isRead) ? "read-mode" : "unread-mode"}>
        <h2>subject {mail.subject}</h2>
        <h3>body {mail.body}</h3>
        <h4>from {mail.from}</h4>
    </section>



}