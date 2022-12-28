import { NoteService } from "../services/note.service.js"

const { useState, useEffect } = React



export function NoteAdd({ onSaveNote }) {

    const [noteToSave, setNoteToSave] = useState(NoteService.getEmptyNote())

    // function onSaveNote(ev) {
    //     ev.preventDefault()
    //     NoteService.save(noteToSave)
    // }

    function handleChange({ target }) {
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setNoteToSave((prevNote) => ({ ...prevNote, info: { ...prevNote.info, txt: value } }))
    }

    function onChangeType(type) {
        setNoteToSave((prevNote) => ({ ...prevNote, type: type }))
    }


    return (
        <section className="note-add">
            <form onSubmit={(ev) => onSaveNote(ev, noteToSave)} >
                <label >
                    Add text
                    <input type="text"
                        name="text"
                        value={noteToSave.txt}
                        onChange={handleChange}
                    />
                </label>
                <button>Add</button>
            </form>
            <div className="form-btns">
                <button onClick={() => onChangeType('note-text')}>txt</button>
                <button onClick={() => onChangeType('note-img')}>img</button>
                <button onClick={() => onChangeType('note-todo')}>todo</button>
            </div>
        </section>
    )
}