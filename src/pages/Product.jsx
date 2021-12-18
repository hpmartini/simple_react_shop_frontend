import * as React from 'react';
import {useEffect, useState} from 'react';
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import {Add, Remove} from "@material-ui/icons";
import {mobile} from "../responsive";
import {useLocation} from "react-router-dom";
import {publicRequest} from "../requestMethods";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding: "10px", flexDirection: "column"})}
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({height: "40vh"})}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({padding: "10px"})}
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Description = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: ${({border}) => border === 'none' ? '20px' : '19px'};
  height: ${({border}) => border === 'none' ? '20px' : '19px'};
  border: ${({border}) => border};
  border-radius: 50%;
  background-color: ${({color}) => color};
  margin: 0 5px;
  cursor: pointer;
  transition: all 0.75s ease;

  &:hover {
    border-radius: 35%;
  }
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({width: "100%"})}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');

    useEffect(async () => {
        try {
            const product = await publicRequest.get("/products/find/" + id);
            setProduct(product.data);
        } catch (error) {

        }
    }, [id]);

    const getBorder = (color) => {
        return color === 'white' ? '1px solid black' : 'none';
    }

    const handleQuantity = (type) => {
        if (type === 'dec') {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    }

    const handleAddToCart = () => {
        console.log(color);
        console.log(size);
    }

    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Wrapper>
                <ImageContainer>
                    <Image src={product.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Description>{product.description}</Description>
                    <Price>{product.price} €</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((color) => (
                                <FilterColor
                                    onClick={() => setColor(color)}
                                    color={color}
                                    border={getBorder(color)}
                                    key={color}
                                />
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(event) => setSize(event.target.value)}>
                                {product.size?.map((size) => (
                                    <FilterSizeOption key={size}>{size}</FilterSizeOption>
                                ))}
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handleQuantity('dec')}/>
                            <Amount>{quantity}</Amount>
                            <Add onClick={() => handleQuantity('inc')}/>
                        </AmountContainer>
                        <Button onClick={handleAddToCart}>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter/>
            <Footer/>
        </Container>
    );
};

export default Product;
