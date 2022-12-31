
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
    getDefaultFilter,
    getGoogleNotesColors
}

function query(filterBy = getDefaultFilter()) {

    return storageService.query(NOTE_KEY)
        .then(notes => {


            if (filterBy.default) {
                notes = notes.filter(note => !note.isArchive && !note.isRemind)
            }
            if (filterBy.type) {
                const regex = new RegExp(filterBy.type, 'i')
                notes = notes.filter(note => regex.test(note.type))
            }
            if (filterBy.archive) {
                notes = notes.filter(note => note.isArchive)
            }
            if (filterBy.remind) {
                notes = notes.filter(note => note.isRemind)
            }
            if (filterBy.search) {
                const regex = new RegExp(filterBy.search, 'i')
                notes = notes.filter(note => regex.test(note.info.txt))
            }


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
    return { 'default': true }
}



function _createNotes() {
    let notes = utilService.loadFromStorage(NOTE_KEY)
    if (!notes || !notes.length) {
        notes = [
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: " The most important of the Warren Buffett quotes: “Rule No. 1 is never lose money. Rule No. 2 is never forget Rule No. ”"
                },
                style: {
                    backgroundColor: 'rgb(253 207 232)'
                }

            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: true,
                info: {
                    txt: "i need to go to the doctor"
                },
                style: {
                    backgroundColor: 'rgb(174 203 250)'
                }

            },
            {
                id: utilService.makeId(),
                type: "note-todos",
                info: {
                    label: "Get my stuff together",
                    todos: [
                        { txt: "Driving liscence", doneAt: null },
                        { txt: "Coding power", doneAt: 187111111 }
                    ]
                },
                style: {
                    backgroundColor: 'rgb(215 174 251)'
                }
            },
            {
                id: utilService.makeId(),
                type: "note-img",
                info: {
                    url: "http://coding-academy.org/books-photos/20.jpg",
                    title: "My Fav Book"
                },
                style: {
                    backgroundColor: 'rgb(242 139 130)'
                }
            },

            {
                id: utilService.makeId(),
                type: "note-video",
                info: {
                    src: "https://www.youtube.com/embed/tgbNymZ7vqY",
                    title: "My Fav Song"
                },
                style: {
                    backgroundColor: 'rgb(230 201 168)'
                }

            },
            {
                id: utilService.makeId(),
                type: "note-todos",
                isPinned: true,

                info: {
                    label: "Coding Acadamy nov22",
                    todos: [
                        { txt: "Sprint 1", doneAt: null, isDone: true },
                        { txt: "Sprint 2", doneAt: null, isDone: true },
                        { txt: "Sprint 3", doneAt: null, isDone: false },
                        { txt: "Sprint 4", doneAt: null, isDone: false },

                    ]
                },
                style: {
                    backgroundColor: 'rgb(204 255 144)'
                }

            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "Not all storms come to disrupt your life. Some come to clear your path"
                },
                style: {
                    backgroundColor: 'rgb(255 244 117'
                }

            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "If you aren't willing to own a stock for 10 years, don't even think about owning it for 10 minutes."
                },
                style: {
                    backgroundColor: 'rgb(174 203 250)'
                }

            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: false,
                info: {
                    txt: "It's far better to buy a wonderful company at a fair price, than a fair company at a wonderful price."
                },
                style: {
                    backgroundColor: 'rgb(232 234 237)'
                }

            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: false,
                isArchive: true,
                info: {
                    txt: "No matter how great the talent or efforts, some things just take time. You can’t produce a baby in one month by getting nine women pregnant."
                },
                style: {
                    backgroundColor: 'rgb(174 203 250)'
                }

            },
            {
                id: utilService.makeId(),
                type: "note-todos",
                isPinned: false,
                isArchive: true,

                info: {
                    label: "Coding Acadamy nov22",
                    todos: [
                        { txt: "Sprint 1", doneAt: null, isDone: true },
                        { txt: "Sprint 2", doneAt: null, isDone: true },
                        { txt: "Sprint 3", doneAt: null, isDone: false },
                        { txt: "Sprint 4", doneAt: null, isDone: false },

                    ]
                },
                style: {
                    backgroundColor: 'rgb(204 255 144)'
                }

            },
            {
                id: utilService.makeId(),
                type: "note-txt",
                isPinned: false,
                isArchive: true,
                info: {
                    txt: "Today people who hold cash equivalents feel comfortable. They shouldn't. They have opted for a terrible long-term asset, one that pays virtually nothing and is certain to depreciate in value"
                },
                style: {
                    backgroundColor: 'rgb(174 203 250)'
                }

            },
            {
                id: utilService.makeId(),
                type: "note-img",
                isRemind: true,
                info: {
                    url: "http://coding-academy.org/books-photos/16.jpg",
                    title: "Book that i want to read"
                },
                style: {
                    backgroundColor: 'rgb(215 174 251)'
                }
            }, {
                id: utilService.makeId(),
                type: "note-img",
                isRemind: true,
                info: {
                    url: "http://coding-academy.org/books-photos/15.jpg",
                    title: "Book that i want to read"
                },
                style: {
                    backgroundColor: 'rgb(167 255 235)'
                }
            }, {
                id: utilService.makeId(),
                type: "note-img",
                isRemind: true,
                info: {
                    url: "http://coding-academy.org/books-photos/10.jpg",
                    title: "Book that i want to read"
                },
                style: {
                    backgroundColor: 'rgb(203 240 248)'
                }
            },



        ]
        utilService.saveToStorage(NOTE_KEY, notes)
    }
}


function getGoogleNotesColors() {
    console.log('colors');
    return ['rgb(242 139 130)', 'rgb(251 188 4)', 'rgb(255 244 117)',
        'rgb(204 255 144)', 'rgb(167 255 235)', 'rgb(203 240 248)', 'rgb(174 203 250)',
        'rgb(215 174 251)', 'rgb(253 207 232)', 'rgb(230 201 168)', 'rgb(232 234 237)', 'rgb(255 255 255)']
}