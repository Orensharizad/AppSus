const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM



import { mailService } from "../services/mail.service.js"

export function MailEdit() {


    const navigate = useNavigate()
    const [mailToEdit, setMailToEdit] = useState(mailService.getEmptyMail())

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setMailToEdit((prevMail) => ({ ...prevMail, [field]: value }))
    }

    function onSaveMail(ev, mailToEdit) {
        ev.preventDefault()
        mailService.save(mailToEdit)
        navigate('/mail')
    }

    return (
        <section className="note-add">
            <form onSubmit={(ev) => onSaveMail(ev, mailToEdit)} >
                <label >
                from
                    <input type="text"
                        name="from"
                        value={mailToEdit.from='x'}
                        onChange={handleChange}
                    />
                </label>
                <label >
                    subject
                    <input type="text"
                        name="subject"
                        value={mailToEdit.subject}
                        onChange={handleChange}
                    />
                </label>
                <label >
                    message :
                    <input type="text"
                        name="body"
                        value={mailToEdit.body}
                        onChange={handleChange}
                    />
                </label>
                <button className="fa fa-paper-plane-o"></button>
                <Link class="fa fa-trash-o" to="/mail"></Link>
            </form>
        </section>
    )
}
