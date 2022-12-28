const { useState, useEffect } = React

import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"
import { MailDetails } from "./mail-details.jsx"


export function MailIndex() {

    const [mails, setMails] = useState([])
    const [selectedMail, setSelectedMail] = useState(null)

    useEffect(() => {
        loadMails()
    }, [])

    function loadMails() {
        mailService.query().then(mailsToUpdate => {
            console.log('mailsToUpdate:', mailsToUpdate);
            setMails(mailsToUpdate)
        })
    }

    function onSelectMail(mailId) {
        mailService.get(mailId).then((mail) => {
            const updatedMail = mail
            updatedMail.isRead = true
            setSelectedMail(updatedMail)
            console.log('updatedMail:', updatedMail);

        })
    }

    return (<section className="mail-index ">
        <MailList mails={mails} onSelectMail={onSelectMail} />

        {selectedMail &&  <MailDetails
        mail = {selectedMail}
        
        />}

    </section>
    )

}