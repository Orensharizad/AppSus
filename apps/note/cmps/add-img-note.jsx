export function AddImgNote({ noteToSave, handleChange }) {
    return (

        <section className="add-img-note">
            <label >
                <input type="text"
                    name="title"
                    value={noteToSave.title}
                    onChange={handleChange}
                    placeholder='Title'
                />
            </label>
            <label >
                <input type="text"
                    name="url"
                    value={noteToSave.url}
                    onChange={handleChange}
                    placeholder='add some URL ...'
                />
            </label>

        </section>








    )
}