import React, { useState } from 'react'
import { auth, googleProvider } from '../config/firebase'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'

function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signUp = async () => {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        console.log(res)
    }

    const signInWithGoogle = async () => {
        const res = await signInWithPopup(auth, googleProvider)
        console.log(res)
    }

    const logout = async () => {
        await signOut(auth)
    }

    console.log(auth?.currentUser)

    return (
        <div className='flex flex-col items-center space-y-3'>
            <input type="text" placeholder='email'
                className='border border-black p-2 rounded'
                onChange={(e) => setEmail(e.target.value)}
            />
            <input type="text" placeholder='password'
                className='border border-black p-2 rounded'
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className='p-2 bg-blue-600 text-white w-32 rounded' onClick={signUp}>SignIn</button>
            <button className='p-2 bg-red-600 text-white w-32 rounded' onClick={signInWithGoogle}>Google SignIn</button>
            <button className='p-2 bg-gray-600 text-white w-32 rounded' onClick={logout}>Logout</button>
        </div>
    )
}

export default Auth