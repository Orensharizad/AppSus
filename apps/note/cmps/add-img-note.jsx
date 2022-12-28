export function AddImgNote({ noteToSave, handleChange }) {
    return (

        <section className="add-img-note">
            <label >
                Add title
                <input type="text"
                    name="title"
                    value={noteToSave.title}
                    onChange={handleChange}
                    placeholder={noteToSave.type}
                />
            </label>
            <label >
                Add url
                <input type="text"
                    name="url"
                    value={noteToSave.url}
                    onChange={handleChange}
                    placeholder={noteToSave.type}
                />
            </label>

        </section>








    )
}