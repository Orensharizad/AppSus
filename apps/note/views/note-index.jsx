import { NoteAdd } from "../cmps/note-add.jsx"
import { NoteFilter } from "../cmps/note-filter.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { NoteService } from "../services/note.service.js"
import { eventBusService, showSuccessMsg } from '../../../services/event-bus.service.js'
import { NoteUpdate } from "../cmps/note-update.jsx"
import { NoteColor } from "../cmps/note-color.jsx"

const { useState, useEffect } = React
const { Link } = ReactRouterDOM


export function NoteIndex() {
    const [filterBy, setFilterBy] = useState(NoteService.getDefaultFilter())
    const [notes, setNotes] = useState([])
    const [isExpend, setIsExpend] = useState(false)
    const [noteIdToUpdate, setNoteIdToUpdate] = useState(null)
    useEffect(() => {
        loadNotes()
    }, [filterBy])


    function loadNotes() {
        NoteService.query(filterBy).then(notes => {
            console.log(notes);
            setNotes(notes)
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
        NoteService.save(noteToSave)
        // setNotes([...notes, note])
        setIsExpend(false)
        loadNotes()
        setNoteIdToUpdate(null)


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




    if (!notes) return <div>loading...</div>

    return <section className="note-index">
        {isExpend && <section>
            <NoteUpdate onSaveNote={onSaveNote} noteIdToUpdate={noteIdToUpdate} />
            <div onClick={onCancelUpdate} className="black-screen"></div>
        </section>
        }
        <NoteFilter onSetFilter={onSetFilter} />
        <NoteAdd onSaveNote={onSaveNote} />

        <NoteList onChangeColor={onChangeColor} onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} notes={notes} />

    </section>

}
