export function AddTodoNote({ noteToSave, handleChange }) {
    return (

        <section className="add-txt-note">
            <label >
                Add title
                <input type="text"
                    name="label"
                    value={noteToSave.label}
                    onChange={handleChange}
                    placeholder={noteToSave.type}
                />
            </label>
            <label >
                Add todo
                <input type="text"
                    name="todos"
                    value={noteToSave.todos}
                    onChange={handleChange}
                    placeholder={noteToSave.type}
                />
            </label>

        </section>


    )
}