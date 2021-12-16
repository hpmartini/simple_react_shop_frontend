import * as React from 'react';
import {useEffect, useState} from 'react';
import styled from "styled-components";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({cat, filters, sorting}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get(cat
                ? `http://localhost:4000/api/products?category=${cat}`
                : 'http://localhost:4000/api/products');
            setProducts(response.data);
        } catch (error) {

        }
    }, [cat]);

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter((item) =>
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                ))
        )
    }, [products, cat, filters]);

    return (
        <Container>
            {filteredProducts.map((item) => (
                <Product item={item} key={item._id}/>
            ))}
        </Container>
    );
};

export default Products;
