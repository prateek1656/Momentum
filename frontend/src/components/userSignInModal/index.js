// import stuff from react library
import { useEffect, useState } from 'react';
// import components from 3rd party ui libraries
import { IonButton, IonInput, IonModal, IonPage, IonSpinner } from '@ionic/react'
// import from context
import { UserAuth } from '../../contexts/AppFirebaseContext';
// import from utils
// import style
import "./style.css"

const AppUserSignInModal = (props) => {
    //state management
    const [contentToShow,setContentToShow] = useState("SOCIAL_LOG_IN");
    const [isSignInSelected, setIsSignInSelected] = useState(true)
    const [isPasswordMatched, setIsPasswordMatched] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    //user authentication function 
    const {googleSignIn, facebookSignIn, emailSignIn, emailSignUp, forgotPasword, logOut, errorMessage, user, loginLoading, setErrorMessage, isResetPasswordLinkSent} = UserAuth()
    //handling of sign in with social account
    const _handleGoogleSignIn = async () => {
        try{
            await googleSignIn();
        }
        catch(error){
            console.log(error)
        }
    }
    const _handleFacebookSignIn = async () => {
        try{
            await facebookSignIn();
        }
        catch(error){
            console.log(error)
        }
    }
    const _handleEmailSignIn = async (userEmail, userPassword) => {
        try{
            await emailSignIn(userEmail,userPassword);
        }
        catch(error){
            console.log(error)
        }
    }
    const _handleEmailSignUp = async (userEmail, userPassword, confirmPassword) => {
        if(userPassword != confirmPassword){
            setIsPasswordMatched(false)
            return
        }
        try{
            await emailSignUp(userEmail,userPassword);
        }
        catch(error){
            console.log(error)
        }
    }
    const _handleForgotPassword = async (userEmail) => {
        try{
            await forgotPasword(userEmail)
        }
        catch(error){
            console.log(error)
        }
    }
    const _handleSignOut = async () => {
        try{
            await logOut();
        }
        catch(error){
            console.log(error)
        }
    }
    //oader
    const _renderLoader = ()=> {
        return (
            <IonPage>
                
            <div className='loader'>
                <IonSpinner />
            </div>
            </IonPage>
        )
    }
    //modal heading
    const ModalContentHeading = (props) => {
        return(
            <div className="contentHeading">
                <div className="signInOptions">
                    <p>{isSignInSelected ? "Do not have an account?":"Already have an account?"}</p>
                    <div className="signUpButton">
                        <u onClick={()=>{setContentToShow("SOCIAL_LOG_IN")
                                        setIsSignInSelected(!isSignInSelected)}}>
                            {isSignInSelected ? "Sign up" : "Sign in"}
                        </u>
                    </div>
                </div>
                <div className="line"></div>
            </div>
        )
    }
    // Error message component
    const ErrorMessage = () => {
        return (
            <div className="errorMessage">
                {errorMessage ? errorMessage:null}
            </div>
        )
    }
    // Success message component
    const SuccessMessage = () => {
        return (
            <div className="successMessage">
                {isResetPasswordLinkSent? "Password reset email has been sent successfully":null}
            </div>
        )
    }
    //Email sign in component
    const EmailSignIn = () => {
        const [userEmail, setUserEmail] = useState("")
        const [userPassword, setUserPassword] = useState("")

        return (
            <div className="emailSignIn">
                <IonInput
                    value={userEmail}
                    placeholder="Email"
                    type="email"
                    onIonChange={(e) => setUserEmail(e.target.value)}
                >
                </IonInput>
                <IonInput 
                    value={userPassword}
                    placeholder="Password"
                    type="password"
                    onIonInput={(e) => setUserPassword(e.target.value)}
                >
                </IonInput>
                {/* <p onClick={()=>setContentToShow("FORGOT_PASSWORD")}>Forgot your password ?</p> */}
                <div>
                    <ErrorMessage />
                    <IonButton onClick={()=>_handleEmailSignIn(userEmail, userPassword)}>Sign in</IonButton>
                </div>
            </div>
        )
    }
    //Email sign up component
    const EmailSignUp = () => {
        const [userEmail, setUserEmail] = useState("")
        const [userPassword, setUserPassword] = useState("")
        const [confirmPassword, setConfirmPassword] = useState("")

        return (
            <div className="emailSignIn">
                <IonInput
                    value={userEmail}
                    placeholder="Email"
                    type="email"
                    onIonChange={(e) => setUserEmail(e.target.value)}
                >
                </IonInput>
                <IonInput 
                    value={userPassword}
                    placeholder="Password"
                    type="password"
                    onIonInput={(e) => setUserPassword(e.target.value)}
                >
                </IonInput>
                <IonInput 
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    type="password"
                    onIonInput={(e) => setConfirmPassword(e.target.value)}
                >
                </IonInput>
                <div>
                    <ErrorMessage />
                    <IonButton onClick={()=> _handleEmailSignUp(userEmail, userPassword, confirmPassword)}>Sign up</IonButton>
                </div>
            </div>
        )
    }
    //forgot password component
    const ForgotPasssword = () => {
        const [userEmail, setUserEmail] = useState("")

        return (
            <div className="emailSignIn">
                Please enter your email
                <IonInput
                    value={userEmail}
                    placeholder="Email"
                    type="email"
                    onIonChange={(e) => setUserEmail(e.target.value)}
                >
                </IonInput>
                <div>
                    <ErrorMessage />
                    <SuccessMessage />
                    {isResetPasswordLinkSent?
                    <IonButton onClick={()=>setContentToShow("SOCIAL_LOG_IN")}>Sign in</IonButton>:
                    <IonButton onClick={()=>_handleForgotPassword(userEmail)}>Change password</IonButton>}
                </div>
            </div>
        )
    }
    //social account login component
    const SocailSignIn = ({item}) => {
        //login in parameters
        const loginOptions = [
            {name:"Google", logo:"https://img.icons8.com/color/48/null/google-logo.png", action:_handleGoogleSignIn},
            // {name:"Facebook", logo:"https://img.icons8.com/color/48/null/facebook-new.png", action:_handleFacebookSignIn}
        ]
        return (
            <div className="socialSignIn">
                <p>{isSignInSelected?"Sign in": "Sign up"} with</p>
                <div className="signInOption">
                    {loginOptions.map((item, idx)=>{
                        return(
                            <div key={idx} className="socailButtons" onClick={item.action}>
                                <div className="Google_logo">
                                    <img className="Google_logo_img" src={item.logo} alt={item.name} />
                                </div>
                                <p> {item.name}</p>
                            </div>
                        )
                    })}
                </div>
                <p>or use your email account</p>
                {isSignInSelected?<EmailSignIn />: <EmailSignUp />}
            </div>
        )
    }
    //select content type
    const _ContentComponent = () => {
        switch(contentToShow){
            case "SOCIAL_LOG_IN":
                return (<SocailSignIn />)
            case "FORGOT_PASSWORD":
                return (<ForgotPasssword />)
            default:
                return null
        }
    }
    
    useEffect(()=>{
        console.log(user);
        console.log(isOpen);
        if (user) {
            setIsOpen(false)
        }
        else {
            setIsOpen(true)
        }
        console.log(isOpen);
    },[user])

    useEffect(()=>{
        setErrorMessage("")
    },[contentToShow, isResetPasswordLinkSent, isSignInSelected])

    //return    
    return (
        <div className={isOpen?'open_modal':'closed_modal'}>
            {loginLoading?
                _renderLoader():
                <>
                    <ModalContentHeading />
                    <div className="modal_content">
                        <_ContentComponent />
                    </div>
                </>
            }
        </div>
    )
}
export default AppUserSignInModal