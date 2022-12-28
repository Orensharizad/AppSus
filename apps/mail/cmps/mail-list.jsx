import { MailPreview } from "./mail-preview.jsx";

export function MailList({mails, onSelectMail ,MailEdit }) {

    return  <ul className="mail-list"> 
    {
        
        mails.map(mail => <li key={mail.id}>
            <MailPreview mail={mail} />
            <div>
           <button onClick={() => onSelectMail(mail.id)}>Select mail</button>
            </div>
        </li>)
    }
</ul>
    

}


