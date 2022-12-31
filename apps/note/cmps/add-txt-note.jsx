export function AddTxtNote({ noteToSave, handleChange }) {
    return (

        <section className="add-txt-note">
            <label >
                <input type="text"
                    name="title"
                    value={noteToSave.title}
                    onChange={handleChange}
                    placeholder='Title'
                />
            </label>
            <textarea
                value={noteToSave.txt}
                name="txt"
                placeholder="Take a note..."
                onChange={handleChange}
            ></textarea>


        </section>


    )
}