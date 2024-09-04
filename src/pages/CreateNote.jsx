import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../config/firebase'

function CreateNote() {
    const [title, settitle] = useState('')
    const [desc, setDesc] = useState('')

    const handleAddNote = async () => {
        try {
            const notesCollection = collection(db, 'notes')
    
            const res = await addDoc(notesCollection, {
                title: title,
                desc: desc
            })
    
            console.log(res)
            alert('Added note')
            
        } catch (error) {
            console.error('Error adding document: ', error)
            alert('Error adding note')
        }
    }

    return (
        <div className='flex flex-col items-center space-y-3'>
            <input type="text" placeholder='title'
                className='border border-black p-2 rounded'
                onChange={(e) => settitle(e.target.value)}
            />
            <input type="text" placeholder='desc'
                className='border border-black p-2 rounded'
                onChange={(e) => setDesc(e.target.value)}
            />
            <button className='p-2 bg-blue-600 text-white w-32 rounded' onClick={handleAddNote}>Add Note</button>
        </div>
    )
}

export default CreateNote