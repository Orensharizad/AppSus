


export function NotePreview({ note }) {



    return (
        <article className="note-preview">
            <DynamicCmp cmpType={note.type} note={note} />

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
    }
}

function NoteTxt({ note }) {
    return <section className="note-txt">
        <h1>{note.info.txt}</h1>
    </section>


}
function NoteImg({ note }) {
    return <section className="note-img">
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