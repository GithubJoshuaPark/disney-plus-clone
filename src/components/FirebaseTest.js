import React, {useState, useEffect, useRef} from 'react'
import styled from "styled-components";
import {db} from '../firebase-config'
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom';

// Firebase Firestore CRUD testing
function FirebaseTest() {
    const [users, setUsers] = useState();
    const [newName, setNewName] = useState("");
    const ageRef = useRef();
    const navigate = useNavigate();

    const usersCollectionRef = collection(db, "users");

    useEffect(() => {
        const getUsers = async () => {
            const msg = "get Users from the firebase firestore documents";
            console.log(`🍎 ~ file: FirebaseTest.js ~ line 19 ~ getUsers ~ msg`, msg);
            getAllUsers();
        }
        getUsers();
    }, [])

    // MARK: - Firbase functions start
    const getAllUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
    }

    const createUser = async () => {
        const msg = "add User into the firebase firestore documents";
        console.log(`🍎 ~ file: FirebaseTest.js ~ line 29 ~ createUser ~ msg`, msg);
       
        const userRefToEmit = newName;
        const ageRefToEmit = ageRef.current.value;

        await addDoc(usersCollectionRef, 
                    {name: userRefToEmit, age: +ageRefToEmit});
    }

    const updateUser = async (id, age) => {
        console.log(`🍎 ~ file: FirebaseTest.js ~ line 39 ~ updateUser ~ age`,id ,age);
        
        const newFields = {age: +age + 1};
        const userDoc = doc(db, "users", id);  // "users" collections 에서 id로 ref
        await updateDoc(userDoc, newFields);
    }

    const deleteUser = async(id) => {
        console.log(`🍎 ~ file: FirebaseTest.js ~ line 51 ~ deleteUser ~ id`, id);
        const userDoc = doc(db, "users", id);  // "users" collections 에서 id로 ref
        await deleteDoc(userDoc)
    }
    // MARK: - Firbase functions end

    return (
        <Container>
            <input placeholder="Name..." onChange={(event) => {setNewName(event.target.value)}}></input>
            <input type="number" placeholder='Age..' ref={ageRef}></input>
            <button onClick={createUser}>Create User</button>
            {
                users && users.map((user) => {
                    return (
                        <Section key={user.id}>
                            <H1Link>
                                Name: {user.name}&nbsp;&nbsp;
                                <button onClick={(event) => {
                                    deleteUser(user.id)
                                }}>Del</button>
                            </H1Link>
                            <H1Link>
                                <Link to='/'>Age: {user.age}</Link>&nbsp;&nbsp;
                                <button onClick={(event) => {
                                    updateUser(user.id, user.age)
                                }}>+ Age</button>
                            </H1Link>
                        </Section>
                    )
                })
            }
        </Container>
    );
}

export default FirebaseTest

const Container = styled.div`
    margin: 40px;
`
const Section = styled.div`
    background: rgba(249,249,249, 0.8);
    border-radius: 4px;
`

const H1Link = styled.div`
    margin: 10px;
    padding: 5px;
    color: black;
`
