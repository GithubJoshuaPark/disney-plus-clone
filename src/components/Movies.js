import React from 'react'
import styled from "styled-components";

function Movies() {
  return (
    <Container>
        <h4>Recommended for You</h4>
        <Content>
            <Wrap>
                <img src="https://cnbl-cdn.bamgrid.com/assets/7a75fbcb7def6233a5ca8955d772d324ff5b0d5fa3b4f239d06b8215939925e5/original" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://cnbl-cdn.bamgrid.com/assets/24168bc232f73887bbd106968d90ff5ec956bb4c2276f3fcda32b69ea05b3ce7/original" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://cnbl-cdn.bamgrid.com/assets/687f06be5d473fc5d091b1ba0f2af5b79acfaefefe30f7ce349dc2837854aba8/original" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://cnbl-cdn.bamgrid.com/assets/1472487ba6868cb6cba8ceb8209a3d768777beeda4dad6fa5c685bc90ae70745/original" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://cnbl-cdn.bamgrid.com/assets/7a75fbcb7def6233a5ca8955d772d324ff5b0d5fa3b4f239d06b8215939925e5/original" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://cnbl-cdn.bamgrid.com/assets/24168bc232f73887bbd106968d90ff5ec956bb4c2276f3fcda32b69ea05b3ce7/original" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://cnbl-cdn.bamgrid.com/assets/687f06be5d473fc5d091b1ba0f2af5b79acfaefefe30f7ce349dc2837854aba8/original" alt="" />
            </Wrap>
            <Wrap>
                <img src="https://cnbl-cdn.bamgrid.com/assets/1472487ba6868cb6cba8ceb8209a3d768777beeda4dad6fa5c685bc90ae70745/original" alt="" />
            </Wrap>
        </Content>
    </Container>
  )
}

export default Movies

const Container = styled.div`

`

const Content = styled.div`
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, minmax(0, 1fr));
`

const Wrap = styled.div`
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;

    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px,
                rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    
    transition: all 250ms;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
                    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249,249,249, 0.8);
    }
`