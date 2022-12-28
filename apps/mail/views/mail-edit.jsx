const { useState, useEffect } = React
const { useNavigate, useParams, Link } = ReactRouterDOM

import { mailService } from "../services/mail.service"

export function MailEdit() {


const [mailToEdit , setMailToEdit] = useState(mailService.getEmptyMail)

console.log('from MailEdit')






}



