const { useState, useEffect } = React



import { AddImgNote } from "./add-img-note.jsx"
import { AddTxtNote } from "./add-txt-note.jsx"
import { AddTodoNote } from "./add-todo-note.jsx"
import { NoteService } from "../services/note.service.js"
import { AddVideoNote } from "./add-video-note.jsx"




export function NoteAdd({ onSaveNote }) {

    const [noteToSave, setNoteToSave] = useState(NoteService.getEmptyNote())
    const [type, setType] = useState('note-txt')


    function handleChange({ target }) {
        let { value, name: field } = target

        if (field === 'todos') {
            setNoteToSave((prevNote) => ({
                ...prevNote, info: { ...prevNote.info, todos: [{ txt: value }] }
            }))
        }

        else setNoteToSave((prevNote) => ({ ...prevNote, info: { ...prevNote.info, [field]: value } }))

    }

    function onChangeType(type) {
        console.log(type)
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
                <button className="btn-add" type="submit"><i className="fa-solid fa-2x fa-plus"></i></button>
                <div className="form-btns">
                    <button type="button" onClick={() => onChangeType('note-txt')}><i className="fa-regular fa-2x  fa-comment"></i></button>
                    <button type="button" onClick={() => onChangeType('note-img')}><i className="fa-regular fa-2x  fa-image"></i></button>
                    <button type="button" onClick={() => onChangeType('note-todos')}><i className="fa-solid fa-2x  fa-list"></i></button>
                    <button type="button" onClick={() => onChangeType('note-video')}><i className="fa-brands fa-2x fa-youtube"></i></button>
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
        case 'note-video':
            return <AddVideoNote {...props} />


    }
}