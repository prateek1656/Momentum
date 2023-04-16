import { useContext, createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup, signInWithRedirect, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../configs/firebase";

const AuthContext = createContext(0)

export const AuthContextProvider= ({children}) => {
    const [user, setUser] = useState({})
    const [errorMessage, setErrorMessage] = useState("")
    const [initialErrorMessage, setInitialErrorMessage] = useState("")
    const [loginLoading, setLoginLoading] = useState(false);
    const [isResetPasswordLinkSent, setIsResetPasswordLinkSent] = useState(false)

    const googleSignIn  = ()=> {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider);
    }

    const facebookSignIn = () => {
        const provider = new FacebookAuthProvider();
        signInWithPopup(auth, provider);
    }

    const emailSignUp = (email, password) => {
        setLoginLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setLoginLoading(false);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setInitialErrorMessage(errorMessage);
            setLoginLoading(false);
        });
    }       

    const emailSignIn = (email, password) => {
        setLoginLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            setLoginLoading(false);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setLoginLoading(false);
            setInitialErrorMessage(errorMessage);
        });
    }

    const forgotPasword = (email) => {
        setLoginLoading(true)
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setIsResetPasswordLinkSent(true);
            setLoginLoading(false);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setInitialErrorMessage(errorMessage);
            setLoginLoading(false);
        });
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return () => {
            unsubscribe();
        }
    },[user])

    useEffect(()=>{
        const extractErrorMessage = () => {
            if(initialErrorMessage){
                const errorString = initialErrorMessage;
                const regex = /\(auth\/(.+)\)/;
                const match = errorString.match(regex);
                const userNotFound = match[1];
                setErrorMessage(userNotFound)
            }
        }
        extractErrorMessage()
    },[initialErrorMessage])


    return (
        <AuthContext.Provider value={{googleSignIn, facebookSignIn, emailSignIn, emailSignUp, logOut, user, forgotPasword, errorMessage, loginLoading, setErrorMessage, isResetPasswordLinkSent}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}