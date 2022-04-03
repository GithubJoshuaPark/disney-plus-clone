import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Detail from "./components/Detail";

// This is a React Router v6 app
import {
  Routes,
  Route,
} from "react-router-dom";
import Login from "./components/Login";
import FirebaseFireStoreTest from './components/FirebaseFireStoreTest';
import FirebaseAuthTest from './components/FirebaseAuthTest';

// eact-router-dom이 버전 6로 업그레이드되면서, Switch를 더이상 지원을 안하게 됬다
// Switch -> routes로 바뀜. 또한 component도 element로 바꼈다.
function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/detail" element={<Detail/>}/>
          <Route path="/firebasefirestore" element={<FirebaseFireStoreTest/>}/>
          <Route path="/firebaseauth" element={<FirebaseAuthTest/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
