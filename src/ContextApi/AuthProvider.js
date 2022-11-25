import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../Firebase/FirebaseConfig';


export const AuthContext = createContext()

const auth = getAuth(app);


const AuthProvider = ({children}) => {
        const [user , setUser] = useState(null);
        const [loading , setLoading] = useState(true)

        const createUser = (email , password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)
        }

        const login =(email , password) =>{
            setLoading(true)
            return signInWithEmailAndPassword(auth,email,password)
        }

        const loginWithGoogle = (googleAuthProvider)=>{
            setLoading(true)
            return signInWithPopup(auth,googleAuthProvider)
        }

        const updateUser = (updateInfo)=>{
            // console.log(updateInfo);
            // const displayName = updateInfo.displayName;
            // const photoURL = updateInfo.photoURL
            return updateProfile(auth.currentUser,updateInfo)
        }

        const logOut =()=>{
            setLoading(true)
            return signOut(auth)
        }

        useEffect(()=>{
            const subscriber = onAuthStateChanged(auth , currentUser=>{
                setUser(currentUser)
                // console.log("setAuth State" , currentUser);
                setLoading(false)
            })
            return () =>{
                subscriber()
            }
        },[])
        

    const userInfo ={
        user,
        loading,
        createUser,
        login,
        loginWithGoogle,
        updateUser,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;