const { Link } = ReactRouterDOM

import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails, onSelectMail, onRemoveMail }) {

    return    <div className="mail-container"> <ul className="mail-list">
        <Link className="link-edit" to={`/mail/edit/`}> Send mail</Link>
        {
            
            mails.map(mail => <li onClick={() => onSelectMail(mail.id)} className={(mail.isRead)? "li-preview read-mode" : "li-preview unread-mode"} 
                key={mail.id}>
                <MailPreview mail={mail} />
                <div>
                     <button className='remove-button' onClick={() => onRemoveMail(mail.id)}>Remove</button>
                </div>
            </li>)
        }
    </ul>
</div>

}
