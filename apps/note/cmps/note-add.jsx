const { useState, useEffect } = React



import { AddImgNote } from "./add-img-note.jsx"
import { AddTxtNote } from "./add-txt-note.jsx"
import { AddTodoNote } from "./add-todo-note.jsx"
import { NoteService } from "../services/note.service.js"




export function NoteAdd({ onSaveNote }) {

    const [noteToSave, setNoteToSave] = useState(NoteService.getEmptyNote())
    const [type, setType] = useState('note-txt')


    function handleChange({ target }) {
        let { value, name: field } = target
        if (field === 'todos' && noteToSave.info.todos) setNoteToSave((prevNote) => ({
            ...prevNote, info: { ...prevNote.info, todos: [{ txt: value }] }
        }))

        else setNoteToSave((prevNote) => ({ ...prevNote, info: { ...prevNote.info, [field]: value } }))

    }

    function onChangeType(type) {
        setNoteToSave((prevNote) => ({ ...prevNote, type: type }))
        setType(type)
    }

    function onSubmitNote(ev) {
        ev.preventDefault()
        onSaveNote(noteToSave)
    }


    return (
        <section className="note-add main-layout">
            <form onSubmit={onSubmitNote} >
                <DynamicCmp cmpType={type} noteToSave={noteToSave} handleChange={handleChange} />
                <button className="btn-add" type="submit">Save</button>
                <div className="form-btns">
                    <button type="button" onClick={() => onChangeType('note-txt')}>txt</button>
                    <button type="button" onClick={() => onChangeType('note-img')}>img</button>
                    <button type="button" onClick={() => onChangeType('note-todos')}>todo</button>
                </div>
            </form>
        </section>
    )
}

function DynamicCmp(props) {
    switch (props.cmpType) {
        case 'note-txt':
            return <AddTxtNote {...props} />
        case 'note-img':
            return <AddImgNote {...props} />
        case 'note-todos':
            return <AddTodoNote {...props} />


    }
}