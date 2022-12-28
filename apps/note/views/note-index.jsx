import { NoteList } from "../cmps/note-list.jsx"
import { NoteService } from "../services/note.service.js"

const { useState, useEffect } = React
const { Link } = ReactRouterDOM


export function NoteIndex() {

    const [notes, setNotes] = useState([])
    useEffect(() => {
        loadNotes()
    }, [])


    function loadNotes() {
        NoteService.query().then(notes => {
            console.log(notes);
            setNotes(notes)
        })
    }
    if (!notes) return <div>loading...</div>
    return <section className="note-index">
        <NoteList notes={notes} />

    </section>

}
