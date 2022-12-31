const { Link } = ReactRouterDOM
const { useState, useEffect } = React

import { NoteService } from "../services/note.service.js"
import { NotePreview } from "./note-preview.jsx"

export function NoteList({ notes, notesPinned, onRemoveNote, onUpdateNote, onChangeColor, onPinNote, onArchiveNote, onRemindNote }) {

    // const notePinned = notes.filter(note => note.isPinned)
    // notes = notes.filter(note => !note.isPinned)

    return (
        <section className="note-list-main main-layout">

            <section className="note-pinned">
                {<h1 className="notes-title">Pinned</h1>}
                <ul className="note-list ">
                    {notesPinned.map((note, idx) =>
                        <li key={idx}  >
                            <NotePreview onRemindNote={onRemindNote} onArchiveNote={onArchiveNote} onPinNote={onPinNote} onChangeColor={onChangeColor} onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} note={note} idx={idx} />
                        </li>)}
                </ul>
            </section>

            <section className="notes">
                <h1 className="notes-title">Notes</h1>
                <ul className="note-list ">
                    {notes.map((note, idx) =>
                        <li key={idx}  >
                            <NotePreview onRemindNote={onRemindNote} onArchiveNote={onArchiveNote} onPinNote={onPinNote}
                                onChangeColor={onChangeColor} onUpdateNote={onUpdateNote} onRemoveNote={onRemoveNote} note={note} idx={idx} />
                        </li>)}
                </ul>
            </section>



        </section >




    )
}