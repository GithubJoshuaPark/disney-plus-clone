import React, {useEffect} from "react";
import styled from "styled-components";
import ImgSlider from './ImgSlider';
import Movies from "./Movies";
import Viewers from './Viewers';

import db from '../firebase'
import { doc, onSnapshot, collection, query } from "firebase/firestore";

function Home() {

    // useEffect(() => {
    //     const q = query(collection(db, "movies"))
    //     const unsub = onSnapshot(q, (querySnapshot) => {
    //         console.log("Data", querySnapshot.docs.map(d => doc.data()));
    //     });
    //   }, [])

    return <Container>
                <ImgSlider/>
                <Viewers/>
                <Movies/>
            </Container>;
}

export default Home;

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        background: no-repeat url("/images/home-background.png") center center / cover fixed;
    }
`;
