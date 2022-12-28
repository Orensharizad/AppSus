import { NotePreview } from "./note-preview.jsx"

const { Link } = ReactRouterDOM




export function NoteList({ notes }) {

    return (
        <section>
            <ul className="note-list">
                {notes.map(note =>
                    <li key={note.id}>
                        <NotePreview note={note} />
                    </li>)}
            </ul>

        </section>




    )
}