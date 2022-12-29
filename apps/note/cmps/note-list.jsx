const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { NoteService } from "../services/note.service.js"
import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, onRemoveNote, onUpdateNote, onChangeColor }) {

    return (
        <section>
            <ul className="note-list main-layout">
                {notes.map((note, idx) =>
                    <li key={idx}  >
                        <NotePreview onChangeColor={onChangeColor} onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} note={note} />

                    </li>)}
            </ul>


        </section >




    )
}