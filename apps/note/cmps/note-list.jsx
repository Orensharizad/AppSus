const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { NotePreview } from "./note-preview.jsx"



export function NoteList({ notes, onRemoveNote }) {
    const [color, setColor] = useState()


    function onSetColor({ target }) {
        setColor(target.value)

    }
    return (
        <section>
            <ul className="note-list">
                {notes.map(note =>
                    <li key={note.id}>
                        <NotePreview note={note} color={color} />
                        <button onClick={() => onRemoveNote(note.id)}>Remove</button>
                        <input type="color"
                            onChange={onSetColor}

                        />
                    </li>)}
            </ul>

        </section>




    )
}