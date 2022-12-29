import { NoteAdd } from "./note-add.jsx";

export function NoteUpdate({ onSaveNote, onCancelUpdate }) {
    return <section className="note-update">
        <NoteAdd onSaveNote={onSaveNote} />
        <button onClick={onCancelUpdate} >❌</button>

    </section>
}