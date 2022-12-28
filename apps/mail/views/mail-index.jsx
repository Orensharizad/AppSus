const { useState, useEffect } = React

import { MailList } from "../cmps/mail-list"
import { mailService } from "../services/mail.service"


export function MailIndex() {

    const [mails, setMails] = useState([])

useEffect(() => {
    loadMails()
}, [])

function loadMails() {
    mailService.query().then(mailsToUpdate => {
        setMails(mailsToUpdate)
    })

    return <section className="mail-index ">
   <h1>hello from mail index </h1>
        <MailList mails={mails}  />
      
</section>
}

}