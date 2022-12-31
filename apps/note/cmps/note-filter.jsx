import { NoteService } from "../services/note.service.js"

const { useState, useEffect, useRef } = React



export function NoteFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(NoteService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])


    function handleChange({ target }) {
        let { value, name: field, type } = target
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }


    return (

        <section className="note-filter main-layout">
            <select className="note-filter-select" name="type" type='text' onChange={handleChange}>
                <option value="">All</option>
                <option value="note-txt">txt</option>
                <option value="note-img">img</option>
                <option value="note-todos">todos</option>
                <option value="note-video">video</option>
            </select>
        </section>
    )
}