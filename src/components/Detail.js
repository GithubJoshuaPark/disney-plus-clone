import React from 'react'
import styled from "styled-components";

function Detail() {
  return (
    <Container>
        <Background>
            <img src="https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg" alt="" />
        </Background>
        <ImageTitle>
            <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C35F86A28E657FE9B06D8AD7B48337E3B7315F405D4E3EFE5E787C10F26E71B3/scale?width=1440&aspectRatio=1.78&format=png" alt="" />
        </ImageTitle>
        <Controls>
            <PlayButton>
                <img src="/images/play-icon-black.png" alt="" />
                <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
                <img src="/images/play-icon-white.png" alt="" />
                <span>Trailer</span>
            </TrailerButton>
            <AddButton>
                <span>+</span>
            </AddButton>
            <GroupWatchButton>
                <img src="/images/group-icon.png" alt="" />
            </GroupWatchButton>
        </Controls>
        <SubTitle>
            2018 • 7m • Family, Fantasy, Kids, Animation
        </SubTitle>
        <Description>
            A Chinese mom who's sad when her grown son leaves home gets another
            chance at motherhood when one of her dumplings springs to life. But she finds
            that nothing stays cute and small forever.
        </Description>
    </Container>
  )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-width: 200px;
    margin-top: 10px;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;  // 
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 525px) {
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    height: 56px;
    background: rgb(249,2149,249);
    padding: 0 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;

    &:hover  {
        background: rgb(198,198,198);
    }

    @media (max-width: 525px) {
        margin: 5px 0;
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    text-transform: uppercase;
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0,0,0,0.6);
    cursor: pointer;

    span {
        font-size: 30px;
        color: white;
    }

    &:hover {
        background: rgb(198,198,198);
    }

    @media (max-width: 525px) {
        margin-bottom: 5px;
        margin-right: 0;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0,0,0);

    &:hover {
        background: rgb(198,198,198);
    }
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;
`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249,249,249);
    max-width: 500px;
`