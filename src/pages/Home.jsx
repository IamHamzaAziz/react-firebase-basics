import { useEffect, useState } from "react"
import { auth } from "../config/firebase"
import { onAuthStateChanged } from "firebase/auth"

function Home() {
    const [name, setName] = useState('')

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setName(user.displayName);  // Set the user's name once authenticated
            } else {
                setName('');  // Handle the case where the user is not authenticated
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
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