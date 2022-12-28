export function MailPreview({ mail }) {
    return <section className={(mail.isRead) ? "read-mode" : "unread-mode"}>
        <li> {mail.from}</li>
        <li> {mail.subject}</li>
        <li> {mail.body}</li>
    </section>



}