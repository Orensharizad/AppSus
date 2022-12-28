export function AddTxtNote({ noteToSave, handleChange }) {
    return (

        <section className="add-txt-note">

            <label >
                Add text
                <input type="text"
                    name="txt"
                    value={noteToSave.txt}
                    onChange={handleChange}
                    placeholder={noteToSave.type}
                />
            </label>


        </section>


    )
}