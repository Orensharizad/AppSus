export function AddTodoNote({ noteToSave, handleChange }) {
    return (
        <section className="add-txt-note">
            <label >
                <input type="text"
                    name="label"
                    value={noteToSave.label}
                    onChange={handleChange}
                    placeholder='Title'
                />
            </label>
            <label >
                <input type="text"
                    name="todos"
                    value={noteToSave.label}
                    onChange={handleChange}
                    placeholder='todo ..'
                />
            </label>
            <label >
                <input type="text"
                    name="todos"
                    value={noteToSave.label}
                    onChange={handleChange}
                    placeholder='todo ..'
                />
            </label>


        </section>


    )
}