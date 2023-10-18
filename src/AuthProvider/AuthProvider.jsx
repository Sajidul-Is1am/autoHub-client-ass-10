import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)


    // email and password registration start
    const handleRegistration = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    // logout
    const handleLogOut = () =>{
        return signOut(auth)
    }

    // email password login
    const handleLogin = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // mannage user

    onAuthStateChanged(auth,(currentUser) =>{
        setUser(currentUser)
    })


    // google login 
    const provider = new GoogleAuthProvider()

    const handleGoogleLogin = () =>{
       return signInWithPopup(auth,provider)
    }





    // tranceformer

    const userInfo = {
        handleRegistration,
        handleLogin,
        handleLogOut,
        handleGoogleLogin,
        user
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;