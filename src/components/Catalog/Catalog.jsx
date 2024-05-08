/* eslint-disable jsx-a11y/alt-text */
import React, {useRef, useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
import {CATALOG} from "./data";
import './Catalog.css'
import {Container,Grid} from "@mui/material";
import {makeStyles} from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//     cardGrid: {
//         flexGrow: 1
//     },
//
// }))

const AllProducts = () => {
    const inputRef = useRef(null)

    const [searchQuery, setSearchQuery] = useState()
    const [categoriesQuery, setCategoriesQuery] = useState()

    const onSearchChange = (e) => {
        const newValue = e.target.value;
        setSearchQuery(newValue)
    }

    const productsList = CATALOG.filter((el) => (el.name.toLowerCase().match(searchQuery && searchQuery.toLowerCase())) && (el.category.match(categoriesQuery)))

    return (
        <>
            <div className='category-wrapper'>
                <div className='category-name'>
                    Выберите категорию товаров :
                </div>
                 <div className='select-wrapper'>
                     <select onChange={(e) => {
                         const newCategories = e.target.value
                         setCategoriesQuery(newCategories)
                     }} className='select-categories'>
                         <option value="fruits">Фрукты</option>
                         <option value="vegetables">Овощи</option>
                     </select>
                 </div>
                {/*//реализовать по тому же принципу что и поиск*/}

            </div>
            <div>
                <input
                    ref={inputRef}
                    type="search"
                    className='search-txt'
                    placeholder="Введите товар"
                    style={{width: '100%', height: 40, marginBottom: 40}}
                    onChange={onSearchChange}
                  />
                <Container  maxWidth="md">
                    <Grid container spacing ={3}>
                        <ul className='products-container'>
                            {productsList.map((el, idx) => (
                                <Grid item key={el} xs={4} sm={6} md={12}>
                                    <ProductCard
                                        key={idx}
                                        name={el.name}
                                        price={el.price}
                                        imgLink={el.img}
                                    />
                                </Grid>

                            ))}
                        </ul>
                    </Grid>
                </Container>
                {/*<ul className='products-container'>*/}
                {/*    {productsList.map((el, idx) => (*/}
                {/*        <ProductCard*/}
                {/*            key={idx}*/}
                {/*            name={el.name}*/}
                {/*            price={el.price}*/}
                {/*            imgLink={el.img}*/}
                {/*        />*/}
                {/*    ))}*/}
                {/*</ul>*/}
            </div>
        </>
    )
}

export default AllProducts