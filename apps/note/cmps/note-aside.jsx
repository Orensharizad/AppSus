import { NoteService } from "../services/note.service.js";

export function NoteAside({ onSetFilter }) {


    return (
        <section className="note-aside">
            <button onClick={() => onSetFilter({ 'default': true })} >Notes</button>
            <button onClick={() => onSetFilter({ 'remind': true })}>Reminders</button>
            <button onClick={() => onSetFilter({ 'archive': true })}>Archive</button>
        </section>
    )
}