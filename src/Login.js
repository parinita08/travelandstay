// import React, { useEffect, useState } from 'react';
// import firebase from './firebase';
// import './Login.css';

// const Login = () => {
//     const [user, setUser] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [emailError, setEmailError] = useState('');
//     const [passwordError, setPasswordError] = useState('');
//     const [hasAccount, setHasAccount] = useState(false);

//     const clearInputs = () => {
//         setEmail('');
//         setPassword('');
//     }

//     const clearErrors = () => {
//         setEmailError('');
//         setPasswordError('');
//     }

//     const handleLogin = () => {
//         clearErrors();
//         firebase
//             .auth()
//             .signInWithEmailAndPassword(email, password)
//             .catch(err => {
//                 switch(err.code){
//                     case "auth/invalid-email":
//                     case "auth/user-disabled":
//                     case "auth/user-not-found":
//                         setEmailError(err.message);
//                         break;
//                     case "auth/wrong-password":
//                         setEmailError(err.message);
//                         break;
//                 }
//             });
//     };

//     const handleSignUp = () => {
//         clearErrors();
//         firebase
//             .auth()
//             .createUserWithEmailAndPassword(email, password)
//             .catch(err => {
//                 switch(err.code){
//                     case "auth/email-already-in-use":
//                     case "auth/invalid-email":
//                         setEmailError(err.message);
//                         break;
//                     case "auth/weak-password":
//                         setEmailError(err.message);
//                         break;
//                 }
//             });
//     };

//     const handleLogout = () => {
//         firebase.auth().signOut();
//     };

//     // Checks if the user exists
//     const authListener = () => {
//         firebase.auth().onAuthStateChanged(user => {
//             if(user){
//                 clearInputs();
//                 setUser(user);
//             } else {
//                 setUser("");
//             }
//         });
//     };

//     useEffect(() => {
//         authListener();
//     }, []);

//     return (
//         <div>
//             Hi
//         </div>
//     );
// };

// export default Login;
import React from 'react';
// import firebase from './firebase';

const Login = ({props}) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>

                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handleLogin}>Sign in</button>
                            <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>Already have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Login;