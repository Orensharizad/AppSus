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

// function getEmptyBook(title = '', price = '') {
//     return { title: '', price: '' }
// }

// function getDefaultFilter() {
//     return { txt: '', minPrice: '', pageCount: '', minYear: '' }
// }

// function getDefaultReview() {
//     return { fullName: '', rating: 0, readAt: '', id: '' }
// }


// function saveReview(bookId, reviewToSave) {
//     const books = _loadBooksFromStorage()
//     const book = books.find((book) => book.id === bookId)
//     const review = _createReview(reviewToSave)
//     book.reviews.unshift(review)
//     _saveBooksToStorage(books)
//     return Promise.resolve(review)
// }

// function removeReview(bookId, reviewId) {
//     let books = _loadBooksFromStorage()
//     let book = books.find((book) => book.id === bookId)
//     const newReviews = book.reviews.filter((review) => review.id !== reviewId)
//     book.reviews = newReviews
//     _saveBooksToStorage(books)
//     return Promise.resolve()
// }

// function _createReview(reviewToSave) {
//     return {
//         id: utilService.makeId(),
//         ...reviewToSave,
//     }
// }


// function _saveBooksToStorage(books) {
//     storageService.saveToStorage(MAIL_KEY, books)
// }

// function _loadBooksFromStorage() {
//     return storageService.loadFromStorage(MAIL_KEY)
// }


function _createMails() {
    let mails = utilService.loadFromStorage(MAIL_KEY)
    if (!mails || !mails.length) {
        mails = [{
            id: 'e101',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'shuki@momo.com',
            to: 'user@appsus.com'

        },
        {
            id: 'e102',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'puki@momo.com',
            to: 'user@appsus.com'

        },
        {
            id: 'e103',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            removedAt: null,
            from: 'baba@momo.com',
            to: 'user@appsus.com'

        },

        ]

        utilService.saveToStorage(MAIL_KEY, mails)
    }
}
