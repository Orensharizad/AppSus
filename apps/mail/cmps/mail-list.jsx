const { Link } = ReactRouterDOM

import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails, onSelectMail, onRemoveMail, onSetFilter, onStared }) {

    return <div className="mail-container"> <ul>
        <Link className="link-edit" to={`/mail/edit/`}> Send mail</Link>
        <button className='sent-button' onClick={() => onSetFilter({ from: 'x' })}>Sent</button>
        {

            mails.map(mail => <li onClick={() => onSelectMail(mail.id)}
                className='li-preview'
                key={mail.id} >
                <button className={mail.isStared ? "fa-solid fa-star marked" : "fa-solid fa-star "} onClick={() => onStared(mail.id)} ></button>


                <MailPreview mail={mail} />
                <div>
                    <button className='remove-button' onClick={() => onRemoveMail(mail.id)}>Remove</button>
                </div>
            </li>)
        }
    </ul>
    </div>

}


