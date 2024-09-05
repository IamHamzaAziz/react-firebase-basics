import React, { useState } from 'react'
import { ref, uploadBytes } from 'firebase/storage'
import { storage } from '../config/firebase';

function UploadFile() {
    const [file, setFile] = useState(null);

    const uploadFile = async () => {
        if (!file) return alert('Select a file to upload');

        try {
            // sample_folder is the name of folder we want to upload file to
            // we can also change the name of file here and modify it as we want
            const storageRef = ref(storage, `sample_folder/${file.name}`);
            await uploadBytes(storageRef, file)

            alert('Upload successful')
        } catch (error) {
            alert('Upload failed')
            console.error('Error uploading file: ', error)
        }

    }

    return (
        <div className='flex flex-col items-center space-y-3'>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={uploadFile} className='p-2 bg-blue-600 text-white w-32 rounded'>Upload</button>
        </div>
    )
}

export default UploadFile