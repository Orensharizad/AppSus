import { NoteAdd } from "../cmps/note-add.jsx"
import { NoteFilter } from "../cmps/note-filter.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { NoteService } from "../services/note.service.js"
import { eventBusService, showSuccessMsg } from '../../../services/event-bus.service.js'
import { NoteUpdate } from "../cmps/note-update.jsx"
import { NoteColor } from "../cmps/note-color.jsx"
import { utilService } from "../../../services/util.service.js"
import { NoteAside } from '../cmps/note-aside.jsx'

const { useState, useEffect } = React
const { Link } = ReactRouterDOM


export function NoteIndex() {
    const [filterBy, setFilterBy] = useState(NoteService.getDefaultFilter())
    const [notes, setNotes] = useState([])
    const [notesPinned, setNotesPinned] = useState([])
    const [isExpend, setIsExpend] = useState(false)
    const [noteIdToUpdate, setNoteIdToUpdate] = useState(null)
    useEffect(() => {
        loadNotes()
    }, [filterBy])


    function loadNotes() {
        NoteService.query(filterBy).then(notes => {
            setNotesPinned(notes.filter(note => note.isPinned))
            setNotes(notes.filter(note => !note.isPinned))
        })
    }

    function onRemoveNote(noteId) {
        NoteService.remove(noteId)
            .then(() => {
                const updatedNotes = notes.filter(note => note.id !== noteId)
                setNotes(updatedNotes)

            })
            .catch((err) => {
                console.log('Had issues removing', err)
            })

    }

    function onSaveNote(noteToSave) {
        noteToSave.id = (noteIdToUpdate) ? noteIdToUpdate : null
        NoteService.save(noteToSave).then(note => {
            loadNotes()
            setIsExpend(false)
            setNoteIdToUpdate(null)
        })


    }

    function onSetFilter(filterByFromFilter) {
        console.log(filterByFromFilter)
        setFilterBy(filterByFromFilter)
    }

    function onUpdateNote(noteId) {
        setIsExpend(!isExpend)
        setNoteIdToUpdate(noteId)
    }
    function onCancelUpdate() {
        setIsExpend(false)
        setNoteIdToUpdate(null)

    }
    function onChangeColor(color, id) {
        NoteService.get(id).then(note => {
            note.style = {
                backgroundColor: color
            }
            NoteService.save(note).then(loadNotes)
        })

    }

    function onPinNote(note, idx) {
        note.isPinned = true
        NoteService.save(note).then(loadNotes)
    }




    // if (!notes) return <div>loading...</div>

    return <section className="note-index">
        <div className="aside">
            <NoteAside />
        </div>
        <div className="main-content">
            {isExpend && <section>
                <NoteUpdate onSaveNote={onSaveNote} noteIdToUpdate={noteIdToUpdate} />
                <div onClick={onCancelUpdate} className="black-screen"></div>
            </section>
            }
            {/* <NoteFilter onSetFilter={onSetFilter} /> */}
            <NoteAdd onSaveNote={onSaveNote} />

            <NoteList onPinNote={onPinNote} onChangeColor={onChangeColor} onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} notes={notes} notesPinned={notesPinned} />
        </div>

    </section>

}
