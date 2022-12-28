export function MailPreview({mail}) {
    return <section className={(mail.isRead) ?"read-mode" : "unread-mode"}>
        <h1>hello from mail preview</h1>
        <h2>subject {mail.subject}</h2>
        <h3>body {mail.body}</h3>
        <h4>to {mail.to}</h4>
    </section>



}