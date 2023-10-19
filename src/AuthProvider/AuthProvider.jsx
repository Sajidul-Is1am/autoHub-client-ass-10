import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // email and password registration start
    const handleRegistration = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // logout
    const handleLogOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // email password login
    const handleLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // mannage user

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => unsubscribe()
    }, [])

    // update profile 
    const handleUpdate = (userName, imglink) => {
       return updateProfile(auth.currentUser, {
            displayName: userName, photoURL: imglink
        })
    }



    // google login 
    const provider = new GoogleAuthProvider()

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, provider)
    }





    // tranceformer

    const userInfo = {
        handleRegistration,
        handleLogin,
        handleLogOut,
        handleGoogleLogin,
        handleUpdate,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;