
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'


const NOTE_KEY = 'noteDB'
_createNotes()

export const NoteService = {
    query,
    get,
    remove,
    save,
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
    return storageService.query(NOTE_KEY)
        .then(notes => {
            console.log('notes:', notes);
            return notes
        })
}

function get(noteId) {
    return storageService.get(NOTE_KEY, noteId)
}

function remove(noteId) {
    return storageService.remove(NOTE_KEY, noteId)
}

function save(note) {
    if (note.id) {
        return storageService.put(NOTE_KEY, note)
    } else {
        return storageService.post(NOTE_KEY, note)
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


function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = [{
            id: "n101",
            type: "note-txt",
            isPinned: true,
            info: {
                txt: "Fullstack Me Baby!"
            }
        },
        {
            id: "n102",
            type: "note-img",
            info: {
                url: "http://some-img/me",
                title: "Bobi and Me"
            },
            style: {
                backgroundColor: "#00d"
            }
        },
        {
            id: "n103",
            type: "note-todos",
            info: {
                label: "Get my stuff together",
                todos: [
                    { txt: "Driving liscence", doneAt: null },
                    { txt: "Coding power", doneAt: 187111111 }
                ]
            }
        }]
        utilService.saveToStorage(NOTE_KEY, notes)
    }
}
