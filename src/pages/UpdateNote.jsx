import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'

function UpdateNote() {
    const { id } = useParams()
    const [note, setNote] = useState({})

    useEffect(() => {
        fetchNote()
    }, [])

    const fetchNote = async () => {
        const docRef = doc(db, 'notes', id)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            console.log('Document data:', docSnap.data());
        } else {
            console.log('No such document!');
        }
        setNote(docSnap.data())
    }

    const updateNote = async () => {
        const data = doc(db, 'notes', id)
        await updateDoc(data, {
            title: note.title,
            desc: note.desc,
        })

        alert('Note updated')
    }



    return (
        <div className='flex flex-col items-center space-y-3'>
            {
                note && (
                    <>
                        <input type="text" placeholder='title'
                            value={note.title}
                            onChange={(e) => setNote({...note, title: e.target.value })}
                            className='border border-black p-2 rounded'
                        />
                        <input type="text" placeholder='desc'
                            value={note.desc}
                            onChange={(e) => setNote({...note, desc: e.target.value })}
                            className='border border-black p-2 rounded'
                        />
                        <button onClick={updateNote} className='p-2 bg-blue-600 text-white w-32 rounded'>Update</button>
                    </>
                )
            }
        </div>
    )
}

export default UpdateNote