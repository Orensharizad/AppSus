const { Link } = ReactRouterDOM

import { MailPreview } from "./mail-preview.jsx";

export function MailList({ mails, onSelectMail, onRemoveMail, onSetFilter, onStared }) {

    return <div className="mail-container">
        <div className="buttons-container">

            <Link className="link-edit" to={`/mail/edit/`}> Compose</Link>
            <button className='sent-button' onClick={() => onSetFilter({ from: 'x' })}>Sent</button>
            <button className='stard-button' onClick={() => onSetFilter({ isStared: true })}>Stared</button>
        </div>
        <div className='mail-content'>
        {
        
            mails.map(mail =>
                 <li onClick={() => onSelectMail(mail.id)}
                    className='li-preview'
                    key={mail.id} >
                    <button className={mail.isStared ? "fa-solid fa-star marked" : "fa-solid fa-star "} onClick={() => onStared(mail.id)} ></button>

                    <MailPreview mail={mail} />
                    <div className="remove-button">
                        <button className='fa-sharp fa-solid fa-trash' onClick={() => onRemoveMail(mail.id)}></button>
                    </div>

                </li>)
        
        

        }
        </div>
    </div>
}
