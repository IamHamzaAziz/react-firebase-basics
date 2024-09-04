import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='bg-black text-white py-5 mb-5'>
            <ul className='flex items-center justify-center space-x-5'>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/sign-up'}>SignUp</Link></li>
                <li><Link to={'/notes'}>Notes</Link></li>
                <li><Link to={'/create-note'}>Create Note</Link></li>
            </ul>
        </header>
    )
}

export default Header