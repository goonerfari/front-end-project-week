import React from 'react';
import NoteCard from './NoteCard';
import { Link } from 'react-router-dom';

const NotesList = props => {
    return(
        <section>
            <h1>Your notes</h1>
            <div className="notes-wrapper">
                {props.notes.map((note, index) => {
                    return (
                        <div key={index} className="card">
                            <Link to={`/note/${note._id}`} >
                                <NoteCard {...props} notes={props.notes} editNote={props.editNote} title={note.title} id={note._id} textBody={note.textBody}/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default NotesList;