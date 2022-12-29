export function MailPreview({ mail }) {
    return <section>
        
            {/* className={(mail.isRead) ? " read-mode" : ""} */}
            
         {mail.from} {mail.subject} 
    </section>
}
