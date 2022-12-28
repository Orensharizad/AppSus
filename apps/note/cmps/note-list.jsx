import { NotePreview } from "./note-preview.jsx"

const { Link } = ReactRouterDOM




export function NoteList({ notes, onRemoveNote }) {

    return (
        <section>
            <ul className="note-list">
                {notes.map(note =>
                    <li key={note.id}>
                        <NotePreview note={note} />
                        <button onClick={() => onRemoveNote(note.id)}>Remove</button>
                    </li>)}
            </ul>

        </section>




    )
}