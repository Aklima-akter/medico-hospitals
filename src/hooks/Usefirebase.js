import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] =useState({});
    const [email, setEmail] =useState('');
    const [password, setPassword] =useState('');
    const [error, setError] =useState('');
    const [isLoading, setIsLoading] =useState(true)

    const auth =getAuth();
    const googleProvider = new GoogleAuthProvider();


    const singInUsingGoogle = ()=>{
        setIsLoading(true);
       return signInWithPopup(auth, googleProvider);
        
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }


    const createUser =() =>{
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const signInUser = () =>{
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                setError('')
                // setUserName()
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const handleFormcontrol = event => {
        event.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 charactar long')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must have a minimum of two upper cases ')
            return;
        }
        if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('The password will contain a minimum of one special symbols (!@#$&*)')
            return;
        }
        // isLogin ? signInUser(email, password) : createUser(email, password)
    }

    const logOut =()=>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
        .finally(()=> setIsLoading(false))
    }

    useEffect( ()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) =>{
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribed;
    },[auth])

    return {
        error,
        setError,
        user,
        singInUsingGoogle,
        logOut,
        createUser,
        signInUser,
        handleFormcontrol,
        handleEmailChange,
        handlePasswordChange,
        setIsLoading,
        isLoading
    }
}
export default useFirebase;