const { useState, useEffect } = React

import { MailFilter } from "../cmps/mail-filter.jsx"
import { MailList } from "../cmps/mail-list.jsx"
import { mailService } from "../services/mail.service.js"
import { MailDetails } from "./mail-details.jsx"

export function MailIndex() {

    const [filterBy, setFilterBy] = useState(mailService.getDefaultFilter())
    const [mails, setMails] = useState([])
    const [selectedMail, setSelectedMail] = useState(null)

    useEffect(() => {
        loadMails()
    }, [filterBy] )

    function loadMails() {
        mailService.query(filterBy).then(mailsToUpdate => {
            console.log('mailsToUpdate:', mailsToUpdate);
            setMails(mailsToUpdate)
        })
    }

    function onSetFilter(filterByFromFilter) {
        setFilterBy(filterByFromFilter)
        console.log('filterByFromFilter', filterByFromFilter);
        
    }

    function onRemoveMail(mailId){
      mailService.remove(mailId)
      .then(()=> {
        const updatedMails = mails.filter(mail=> mail.id !==mailId)
        setMails(updatedMails)

      })

    }

    function onSelectMail(mailId) {
        mailService.get(mailId).then((mail) => {
            const updatedMail = mail
            updatedMail.isRead = true
            setSelectedMail(updatedMail)
            // console.log('updatedMail:', updatedMail , updatedMail.id);
        })
    }

    function onStared(mailId){
        console.log('mailId:', mailId);
        mailService.get(mailId).then((mail) => {
            const updatedMail = mail
            updatedMail.isStared = !updatedMail.isStared
            setSelectedMail(updatedMail)
            mailService.save(updatedMail).then(loadMails)
            console.log('updatedMail:', updatedMail , updatedMail.id);
        })   
    }

    return (<section className="mail-index ">
        <MailFilter onSetFilter={onSetFilter} />
        <MailList mails={mails} onSelectMail={onSelectMail} onRemoveMail = {onRemoveMail} onSetFilter={onSetFilter} onStared={onStared} />

        {selectedMail &&  <MailDetails
        mail = {selectedMail}
        
        />}

    </section>
    )

}