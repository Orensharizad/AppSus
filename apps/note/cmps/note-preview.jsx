


export function NotePreview({ note, color, onRemoveNote, onUpdateNote }) {



    return (
        <article style={{ backgroundColor: color }} className="note-preview">
            <DynamicCmp cmpType={note.type} note={note} />
            <button className="btn-remove" onClick={() => onRemoveNote(note.id)}>Delete</button>
            <button className="btn-update" onClick={() => onUpdateNote(note.id)}>Update</button>


        </article>

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
    return <section className="note-txt">
        <pre>{note.info.txt}</pre>
    </section>


}
function NoteImg({ note }) {
    return <section className="note-img">
        <h1>{note.info.title}</h1>
        <img src={note.info.url} alt="User Img" />
    </section>
}
function NoteTodos({ note }) {
    return <section className="note-todos">
        <ul>
            <h1>{note.info.label}</h1>
            {note.info.todos.map(todo =>
                < li key={todo.txt} >
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