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
            subject: 'Sale',
            body: 'Would love to catch up sometimes 111111111111111111',
            isRead: false,
            isStared:false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'Daniel',
            to: 'user@appsus.com'

        },
        {
            id: 'e102',
            subject: 'Job alert',
            body: 'Would love to catch up sometimes 222222222222222',
            isRead: false,
            isStared:false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'Oren',
            to: 'user@appsus.com'

        },
        {
            id: 'e103',
            subject: 'Sale',
            body: 'Would love to catch up sometimes 3333333333333333',
            isRead: false,
            isStared:false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'David',
            to: 'user@appsus.com'

        },
        {
            id: 'e104',
            subject: 'Sale',
            body: 'Would love to catch up sometimes 3333333333333333',
            isRead: false,
            isStared:false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'Google',
            to: 'user@appsus.com'

        },
        {
            id: 'e105',
            subject: 'Sale',
            body: 'Would love to catch up sometimes 3333333333333333',
            isRead: false,
            isStared:false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'YouTube',
            to: 'user@appsus.com'

        },
        {
            id: 'e106',
            subject: 'Sale',
            body: 'Would love to catch up sometimes 3333333333333333',
            isRead: false,
            isStared:false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'David',
            to: 'user@appsus.com'

        },
        {
            id: 'e107',
            subject: 'Sale',
            body: 'Would love to catch up sometimes 3333333333333333',
            isRead: false,
            isStared:false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'David',
            to: 'user@appsus.com'

        },
        ]

        utilService.saveToStorage(MAIL_KEY, mails)
    }
}
