import { NoteAdd } from "../cmps/note-add.jsx"
import { NoteList } from "../cmps/note-list.jsx"
import { NoteService } from "../services/note.service.js"
import { eventBusService, showSuccessMsg } from '../services/event-bus.service.js'
import { NoteUpdate } from "../cmps/note-update.jsx"
import { NoteAside } from '../cmps/note-aside.jsx'
import { UserMsg } from "../../../cmps/user-msg.jsx"
import { NoteFilter } from "../cmps/note-filter.jsx"


const { useState, useEffect } = React


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
            setNotes(notes.filter(note => note && !note.isPinned))
        })
    }

    function onRemoveNote(noteId) {
        NoteService.remove(noteId)
            .then(() => {
                const updatedNotes = notes.filter(note => note.id !== noteId)
                setNotes(updatedNotes)
                loadNotes()
            })
            .catch((err) => {
                console.log('Had issues removing', err)
            })
        showSuccessMsg('Note Removed ')


    }

    function onSaveNote(noteToSave) {
        noteToSave.id = (noteIdToUpdate) ? noteIdToUpdate : null
        NoteService.save(noteToSave).then(note => {
            loadNotes()
            setIsExpend(false)
            setNoteIdToUpdate(null)
            showSuccessMsg('Note Saved ')
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
        note.isPinned = note.isPinned ? false : true
        NoteService.save(note).then(loadNotes)
        showSuccessMsg('Note Pinned ')

    }

    function onArchiveNote(note) {
        note.isArchive = note.isArchive ? false : true
        NoteService.save(note).then(loadNotes)
        showSuccessMsg('Note Archived ')
    }

    function onRemindNote(note) {
        note.isRemind = note.isRemind ? false : true
        NoteService.save(note).then(loadNotes)
        showSuccessMsg('Note Reminded ')
    }


    // if (!notes) return <div>loading...</div>

    return <section className="note-index ">
        <div className="aside">
            <NoteAside onSetFilter={onSetFilter} />
        </div>
        <div className="main-content">
            {isExpend && <section>
                <NoteUpdate onSaveNote={onSaveNote} noteIdToUpdate={noteIdToUpdate} />
                <div onClick={onCancelUpdate} className="black-screen"></div>
            </section>
            }
            <NoteAdd onSaveNote={onSaveNote} />
            <NoteFilter onSetFilter={onSetFilter} />

            <NoteList onPinNote={onPinNote} onChangeColor={onChangeColor} onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} notes={notes} notesPinned={notesPinned} onArchiveNote={onArchiveNote} onRemindNote={onRemindNote} />
        </div>

        <UserMsg />

    </section>

}
