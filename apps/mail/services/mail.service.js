import {utilService} from './utilService.js'
import { storageService } from './async-storage.service.js'

const MAIL_KEY = 'mailDB'
_createMails()

export const mailService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    getDefaultFilter,
    getDefaultReview,
    saveReview,
    removeReview
}

// function query(filterBy = getDefaultFilter()) {

//     return storageService.query(STORAGE_KEY)
//         .then(books => {
//             if (filterBy.txt) {
//                 const regex = new RegExp(filterBy.txt, 'i')
//                 books = books.filter(book => regex.test(book.title))
//             }
//             if (filterBy.minPrice) {
//                 books = books.filter(book => book.listPrice.amount >= filterBy.minPrice)
//             }
//             if (filterBy.pageCount) {
//                 books = books.filter(book => book.pageCount <= filterBy.pageCount)
//             }
//             if (filterBy.minYear) {
//                 books = books.filter(book => filterBy.minYear >= utilService.getYearsDistance(book.publishedDate))
//             }

//             return books
//         })
// }
function query() {
    return storageService.query(MAIL_KEY)
        .then(mails => {
            console.log('mails:', mails);
            return mails
        })
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
            to: 'momo@momo.com'
        },
        {
            id: 'e102',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com'
        },
        {
            id: 'e103',
            subject: 'Miss you!',
            body: 'Would love to catch up sometimes',
            isRead: false,
            sentAt: 1551133930594,
            to: 'momo@momo.com'
        },

        ]

        utilService.saveToStorage(MAIL_KEY, mails)
    }
}
