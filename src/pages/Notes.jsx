import React from 'react'
import { useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { getDocs, collection } from 'firebase/firestore'

function Notes() {
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetchNotes()
    }, [])

    const fetchNotes = async () => {
        const notesCollection = collection(db, 'notes')
        const querySnapshot = await getDocs(notesCollection)
        // console.log(querySnapshot)

        const notesData = querySnapshot.docs.map(doc => ({ id: doc.id,...doc.data() }))
        console.log(notesData)
        setNotes(notesData)
    }


    return (
        <div>
            {
                notes.map(note => (
                    <div key={note.id} className='my-3 text-center'>
                        <h3 className='text-xl font-bold'>{note.title}</h3>
                        <p>{note.desc}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Notes