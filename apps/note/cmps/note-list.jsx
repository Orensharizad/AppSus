const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { NoteService } from "../services/note.service.js"
import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, notesPinned, onRemoveNote, onUpdateNote, onChangeColor, onPinNote }) {

    // const notePinned = notes.filter(note => note.isPinned)
    // notes = notes.filter(note => !note.isPinned)

    return (
        <section>

            <section className="note-pinned">
                <h1>Pinned</h1>
                <ul className="note-list main-layout">
                    {notesPinned.map((note, idx) =>
                        <li key={idx}  >
                            <NotePreview onPinNote={onPinNote} onChangeColor={onChangeColor} onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} note={note} idx={idx} />
                        </li>)}
                </ul>
            </section>

            <section className="notes">
                <h1>Notes</h1>
                <ul className="note-list main-layout">
                    {notes.map((note, idx) =>
                        <li key={idx}  >
                            <NotePreview onPinNote={onPinNote} onChangeColor={onChangeColor} onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} note={note} idx={idx} />
                        </li>)}
                </ul>
            </section>



        </section >




    )
}