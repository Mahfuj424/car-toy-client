import { createContext, useEffect, useState } from 'react';
import {
    getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut,
    signInWithEmailAndPassword, GoogleAuthProvider,
    signInWithPopup, GithubAuthProvider, updateProfile
} from "firebase/auth";
import { app } from '../../Component/firebase/firebase-config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState()
    console.log(user);
    
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // Monitor user changes
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false);
            setUser(currentUser)
        })

        return () => {
            return unSubscribe();
        }
    }, [])

    const logOut = () => {
        
       return signOut(auth);
    }


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    
    
    
    const googleUser = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubUser = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    

    const updateUserProfile = (name, imgURL) => {
        console.log(name,imgURL);
        return updateProfile(auth.currentUser, {
                    displayName: name,
                    photoURL : imgURL,
                })
    }


    const authInfo = {
        registerUser,
        loading,
        user,
        updateUserProfile,
        logOut,
        loginUser,
        googleUser,
        githubUser,
        setReload
        
    };


    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;