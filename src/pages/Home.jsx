import { useEffect, useState } from "react"
import { auth } from "../config/firebase"

function Home() {
    const [name, setName] = useState('')

    useEffect(() => {
        setName(auth?.currentUser?.displayName)
    }, [])
    
    console.log(auth?.currentUser?.displayName)


    return (
        <div>
            {
                !name ? (
                    <div className="text-center">
                        Hello
                    </div>
                ) : (
                    <div className="text-center">
                        Hello <span>{ name }</span>
                    </div>
                )
            }
        </div>
    )
}

export default Home