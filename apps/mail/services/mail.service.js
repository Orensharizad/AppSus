import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'


const MAIL_KEY = 'mailDB'
_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyMail,
    getDefaultFilter
}

function query(filterBy = getDefaultFilter()) {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                mails = mails.filter(mail => regex.test(mail.subject))
            }
            if (filterBy.from) {
                const regex = new RegExp(filterBy.from, 'i')
                mails = mails.filter(mail => regex.test(mail.from))
                console.log(mails)

            }
            if (filterBy.isStared) {
                console.log('hi from if is stared:');
                mails = mails.filter(mail =>mail.isStared)
            }

            return mails
        })
}

function getDefaultFilter() {
    return { subject: '' }
}

function getEmptyMail(subject = '', body = '', to = '') {
    return { subject, body, to }
}

function get(mailId) {
    return storageService.get(MAIL_KEY, mailId)
}

function remove(mailId) {
    return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
    if (mail.id) {
        return storageService.put(MAIL_KEY, mail)
    } else {
        return storageService.post(MAIL_KEY, mail)
    }
}

function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = [{
            id: 'e101',
            subject: 'job alert',
            body: 'מבצע סוף שנה במטמון - בהזדמנות אחרונה | שובר לרשת FOOD APPEAL | מצלמת רכב מ-119 ₪ | תנורים, ביגוד תרמי ושמיכות לחורף | מבצעי רכב בטריידמול ועוד',
            isRead: false,
            isStared: true,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'hever',
            to: 'user@appsus.com'

        },
        {
            id: 'e102',
            subject: 'job alert',
            body: 'וובינור מתחיל בעוד כמה דק',
            isRead: false,
            isStared: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'Oren',
            to: 'user@appsus.com'

        },
        {
            id: 'e103',
            subject: 'Sale',
            body: 'קורס תכנות ב-12 שבועות - גם לחסרי ניסיון',
            isRead: false,
            isStared: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'Coding academy',
            to: 'user@appsus.com'

        },
        {
            id: 'e104',
            subject: 'Sale',
            body: 'וובינר משקיעים מתחילים עוד כמה דקות!',
            isRead: false,
            isStared: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'Google',
            to: 'user@appsus.com'

        },
        {
            id: 'e105',
            subject: 'Sale',
            body: 'The weather is cooling off—but this opportunity to kick your tech career into high gear is red hot',
            isRead: false,
            isStared: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'YouTube',
            to: 'user@appsus.com'

        },
        {
            id: 'e106',
            subject: 'job alert',
            body: 'דניאל, קבל מארז סופגניות מפנק תמורת 25 גודיז בלבד! – ללא עלות ',
            isRead: false,
            isStared: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'David',
            to: 'user@appsus.com'

        },
        {
            id: 'e107',
            subject: 'Sale',
            body: 'עוסקים בניהול שיווק? בואו לגלות כיצד Google Ads יכול ',
            isRead: false,
            isStared: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'Google',
            to: 'user@appsus.com'

        },
        ]
        utilService.saveToStorage(MAIL_KEY, mails)
    }
}
