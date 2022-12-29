import { NoteAdd } from "./note-add.jsx";

export function NoteUpdate({ onSaveNote }) {
    return <section className="note-update">
        <NoteAdd onSaveNote={onSaveNote} />
    </section>
}