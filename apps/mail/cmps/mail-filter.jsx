const { useState, useEffect } = React

import { mailService } from "../services/mail.service.js"

export function MailFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(mailService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'number') ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }

    return <section className="mail-filter">
        <h1>filter our emails</h1>
        <form onSubmit={onSubmitFilter}>
            <label htmlFor="subject">Subject:</label>
            <input type="text"
                id="subject"
                name="txt"
                placeholder="By subject"
                value={filterByToEdit.txt}
                onChange={handleChange}
            />
            <button>Filter mails</button>
        </form>
    </section>
}