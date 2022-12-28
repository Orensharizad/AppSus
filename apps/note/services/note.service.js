
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'


const NOTE_KEY = 'noteDB'
_createNotes()

export const NoteService = {
    query,
    get,
    remove,
    save,
    getEmptyNote,
    getDefaultFilter
}

function query(filterBy = getDefaultFilter()) {

    return storageService.query(NOTE_KEY)
        .then(notes => {
            if (filterBy.type) {
                const regex = new RegExp(filterBy.type, 'i')
                notes = notes.filter(note => regex.test(note.type))
                console.log('type');
            }
            return notes
        })
}
// function query() {
//     return storageService.query(NOTE_KEY)
//         .then(notes => {
//             console.log('notes:', notes);
//             return notes
//         })
// }

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

function getEmptyNote() {
    return {
        type: "note-txt",
        isPinned: false,
        info: {
            txt: ''
        }
    }
}

function getDefaultFilter() {
    return { type: '' }
}

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
                url: "http://coding-academy.org/books-photos/20.jpg",
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
            },
        },
        {
            id: "n104",
            type: "note-video",
            info: {
                src: "https://www.youtube.com/embed/tgbNymZ7vqY",
                title: "Bobi and Me"
            }

        },


        ]
        utilService.saveToStorage(NOTE_KEY, notes)
    }
}
