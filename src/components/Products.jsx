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

const Products = async ({cat, filters, sorting}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(cat
                    ? `http://localhost:4000/api/products?category=${cat}`
                    : 'http://localhost:4000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.log('Error fetching products', error)
            }
        }
        fetchProducts();
    }, [cat]);

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter((item) =>
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
                ))
        )
    }, [products, cat, filters]);

    useEffect(() => {
        if (sorting === 'newest') {
            setFilteredProducts((products) =>
                [...products].sort((a, b) => a.createdAt - b.createdAt))
        } else if (sorting === 'asc') {
            setFilteredProducts((products) =>
                [...products].sort((a, b) => a.price - b.price))
        } else {
            setFilteredProducts((products) =>
                [...products].sort((a, b) => b.price - a.price))
        }
        console.log(sorting);

    }, [sorting]);


    return (
        <Container>
            {cat
                ? filteredProducts.map((item) => (<Product item={item} key={item._id}/>))
                : products
                    .slice(0, 8)
                    .map((item) => (<Product item={item} key={item._id}/>))
            }
        </Container>
    );
};

export default Products;
