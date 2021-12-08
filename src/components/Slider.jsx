import * as React from 'react';
import styled from "styled-components";
import {ArrowLeft, ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";

const Container = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    position: relative;
    overflow: hidden;`

const Wrapper = styled.div`
    height: 100%;
    display: flex;`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${({direction}) => direction === 'left' && '10px'};
    right: ${({direction}) => direction === 'right' && '10px'};
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;;
    `

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: ${({bg}) => bg}`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;`
const Image = styled.img`
    height: 80%;
    `
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;`

const Title = styled.h1`
    font-size: 70px;`
const Description = styled.h1`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;`;

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;`

const Slider = () => {
    return (
        <Container>
            <Arrow direction='left'>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper>
                <Slide bg="f5fafd">
                    <ImageContainer>
                        <Image src="https://images.unsplash.com/photo-1602143407151-7111542de6e8"/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>THE BOTTLE_</Title>
                        <Description>Shop it! A, sh, shop! Shop it real good!</Description>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="fcf1ed">
                    <ImageContainer>
                        <Image src="https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Shoo! Shoo! Shoes!</Title>
                        <Description>Shop it! A, sh, shop! Shop it real good!</Description>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
                <Slide bg="fbf0f4">
                    <ImageContainer>
                        <Image src="https://images.unsplash.com/photo-1546868871-7041f2a55e12"/>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>WHAAAATCH!!!</Title>
                        <Description>Shop it! A, sh, shop! Shop it real good!</Description>
                        <Button>SHOW NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction='right'>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    );
};

export default Slider;
