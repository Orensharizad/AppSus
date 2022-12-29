

export function MailDetails ({mail}) {
return <section className ='mail-details'   >
<h1>{mail.id}</h1>
<p>Message: {mail.body} </p>
<p>Sent to:{mail.to}</p>
</section>
}