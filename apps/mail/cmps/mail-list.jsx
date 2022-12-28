const { Link } = ReactRouterDOM

import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails, onSelectMail, onRemoveMail }) {

    return <ul className="mail-list">
        {

            mails.map(mail => <li key={mail.id}>
                <MailPreview mail={mail} />
                <div>
                    <button onClick={() => onRemoveMail(mail.id)}>Remove</button>
                    <button onClick={() => onSelectMail(mail.id)}>Select mail</button>
                    <Link to={`/mail/edit/`}> Edit</Link>
                </div>
            </li>)
        }
    </ul>


}


