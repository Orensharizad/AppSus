const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, onRemoveNote, onUpdateNote }) {
    const [color, setColor] = useState()


    function onSetColor({ target }) {
        setColor(target.value)

    }
    return (
        <section>
            <ul className="note-list main-layout">
                {notes.map((note, idx) =>
                    <li key={idx}>
                        <NotePreview onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} note={note} color={color} />
                    </li>)}
            </ul>

        </section>




    )
}