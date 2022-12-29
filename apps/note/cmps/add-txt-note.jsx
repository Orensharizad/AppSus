export function AddTxtNote({ noteToSave, handleChange }) {
    return (

        <section className="add-txt-note">
            <p>
                <textarea
                    value={noteToSave.txt}
                    name="txt"
                    placeholder="Take a note..."
                    onChange={handleChange}
                ></textarea>
            </p>

        </section>


    )
}