import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, {useState} from 'react'
import styled from "styled-components";
import { auth } from '../firebase-config';

function FirebaseAuthTest() {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPwd,   setRegisterPwd  ] = useState("");
    const [loginEmail,    setLoginEmail   ] = useState("");
    const [loginPwd,      setLoginPwd     ] = useState("");

    const [user,          setUser         ] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        // Adds an observer for changes to the user's sign-in state.
        // called after login | logout | createuserWith...
        setUser(currentUser);
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPwd);
            console.log(`🍎 ~ file: FirebaseAuthTest.js ~ line 22 ~ register ~ user`, user);
        } catch (error) {
            console.log(`🍎 ~ file: FirebaseAuthTest.js ~ line 24 ~ register ~ error`, error.message);
        }
        
    };

    const login = async () => {
        try {
            const user =  await signInWithEmailAndPassword(auth, loginEmail, loginPwd);
            console.log(`🍎 ~ file: FirebaseAuthTest.js ~ line 32 ~ login ~ user`, user);
        } catch (error) {
            console.log(`🍎 ~ file: FirebaseAuthTest.js ~ line 34 ~ login ~ error`, error.message);
        }
    };

    const logout = async () => {
        await signOut(auth);
    };

    return (
        <Container>
            <SignUpSection>
                <h3>Register User</h3>
                <input placeholder='Email...' onChange={(event) => {
                    setRegisterEmail(event.target.value)
                }}></input>
                <input type="password" placeholder='Password...' onChange={(event) => {
                    setRegisterPwd(event.target.value)
                }}></input>
                <button onClick={register}>Create User</button>
            </SignUpSection>
            <LoginSection>
                <h3>Login</h3>
                <input placeholder='Email...' onChange={(event) => {
                    setLoginEmail(event.target.value)
                }}></input>
                <input type="password" placeholder='Password...' onChange={(event) => {
                    setLoginPwd(event.target.value)
                }}></input>
                <button onClick={login}>Login</button>
            </LoginSection>
            <UserStatus>
                <h4>User Logged In:{user&&user.email}</h4>
                <button onClick={logout}>Sign Out</button>
            </UserStatus>
        </Container>
    )
}

export default FirebaseAuthTest

const Container = styled.div`
    width: 100%;
    margin: 50px auto;
`

const SignUpSection = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    margin: 30px;

    input {
        margin: 5px 0;
        height: 30px;
    }
    button {
        background: rgba(249,249,249,0.7);
        font-size: 15px;
        letter-spacing: 1.2px;
        height:30px;
        margin-top: 10px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.5s;
        &:hover {
            opacity: 0.7;
        }
    }
`

const LoginSection = styled(SignUpSection)`

`

const UserStatus = styled(SignUpSection)`
    h4 {
        color: yellow;
    }
`