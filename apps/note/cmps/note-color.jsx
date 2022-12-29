const { useState, useEffect } = React

import { NoteService } from "../services/note.service.js"



export function NoteColor({ onSetColor }) {

    const [color, setColor] = useState(NoteService.getGoogleNotesColors())

    return (

        <section className="google-colors main-layout" >
            {color.map((color, idx) =>
                <div onClick={() => onSetColor(color)} key={idx} className="btns-color" style={{ backgroundColor: color }}></div>
            )}
        </section>
    )
}