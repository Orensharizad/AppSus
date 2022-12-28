import { NoteAdd } from "../cmps/note-add.jsx"
import { NoteFilter } from "../cmps/note-filter.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { NoteService } from "../services/note.service.js"

const { useState, useEffect } = React
const { Link } = ReactRouterDOM


export function NoteIndex() {
    const [filterBy, setFilterBy] = useState(NoteService.getDefaultFilter())


    const [notes, setNotes] = useState([])
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
    function onSaveNote(ev, noteToSave) {
        ev.preventDefault()
        NoteService.save(noteToSave).then((note) => {
            setNotes([...notes, note])
        })

    }

    function onSetFilter(filterByFromFilter) {
        console.log(filterByFromFilter)
        setFilterBy(filterByFromFilter)
    }

    if (!notes) return <div>loading...</div>

    return <section className="note-index">
        <NoteFilter onSetFilter={onSetFilter} />
        <NoteAdd onSaveNote={onSaveNote} />
        <NoteList onRemoveNote={onRemoveNote} notes={notes} />

    </section>

}
