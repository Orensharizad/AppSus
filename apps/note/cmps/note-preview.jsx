const { useState, useEffect } = React


import { NoteService } from "../services/note.service.js"
import { NoteColor } from "./note-color.jsx"



export function NotePreview({ note, idx, onRemoveNote, onUpdateNote, onChangeColor, onPinNote, onArchiveNote, onRemindNote }) {
    const [expandColors, setExpandColors] = useState(false)

    function onExpandColors() {
        setExpandColors(!expandColors)
    }
    function onSetColor(color) {
        onChangeColor(color, note.id)
    }


    return (
        <article style={note.style} className="note-preview">
            <button title="Pin Note" onClick={() => onPinNote(note, idx)}><i className="fa-solid fa-thumbtack"></i></button>
            <DynamicCmp cmpType={note.type} note={note} />
            <div className="preview-btns">
                <button title="Delete" className="btn-remove" onClick={() => onRemoveNote(note.id)}><i className="fa-solid fa-trash"></i></button>
                <button title="Update" className="btn-update" onClick={() => onUpdateNote(note.id)}><i className="fa-solid fa-pen-to-square"></i></button>
                <button title="Note Color" onClick={onExpandColors}><i className="fa-solid fa-palette"></i></button>
                <button title="Remaind Me Later" onClick={() => onRemindNote(note)} ><i className="fa-solid fa-bell"></i></button>
                <button title="Archive" onClick={() => onArchiveNote(note)}><i className="fa-solid fa-box-archive"></i></button>
            </div>

            {expandColors && <NoteColor onSetColor={onSetColor} />}

        </article >

    )

}

function DynamicCmp(props) {
    switch (props.cmpType) {
        case 'note-txt':
            return <NoteTxt {...props} />
        case 'note-img':
            return <NoteImg {...props} />
        case 'note-todos':
            return <NoteTodos {...props} />
        case 'note-video':
            return <NoteVideo {...props} />
    }
}

function NoteTxt({ note }) {

    function handleTxtChange(e) {
        note.info.txt = e.currentTarget.textContent
        NoteService.save(note)
    }
    return <section className="note-txt">
        <h1>{note.info.title}</h1>
        <pre onInput={handleTxtChange} contentEditable={true} >{note.info.txt}</pre>
    </section >
}
function NoteImg({ note }) {
    return <section className="note-img">
        <h1>{note.info.title}</h1>
        <img src={note.info.url} alt="User Img" />
    </section>
}


function NoteTodos({ note }) {
    const [todoIsDone, setTodoIsDone] = useState(false)

    function onSetTodoIsDone(idx) {
        setTodoIsDone(!todoIsDone)
        note.info.todos[idx].isDone = todoIsDone
    }


    return <section className="note-todos">
        <ul>
            <h1>{note.info.label}</h1>
            {note.info.todos.map((todo, idx) =>
                < li className={todo.isDone ? 'done' : ''} onClick={() => onSetTodoIsDone(idx)} key={todo.txt} >
                    {todo.txt}
                </li>)}
        </ul>
    </section >
}


function NoteVideo({ note }) {
    return <section className="note-video">
        <ul>
            <h1>vidoe</h1>
            <iframe
                src={note.info.src}>
            </iframe>

        </ul>
    </section >
}