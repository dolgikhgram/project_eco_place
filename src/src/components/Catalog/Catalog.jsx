/* eslint-disable jsx-a11y/alt-text */
import React, {useRef, useState} from "react";
import ProductCard from "../ProductCard/ProductCard";
import {CATALOG} from "./data";
import './Catalog.css'
import {Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";;

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
            <div className='catalog-wrapper'>
                <TextField
                    label="Введите товар"
                    variant="outlined"
                    ref={inputRef}
                    className='search-txt'
                    color="success"
                    focused
                    onChange={onSearchChange}/>
                <div className='select-wrapper'>
                    <FormControl   sx={{ minWidth: 200 }} className='formControl-wrapper'  >
                        <InputLabel id="demo-simple-select-label" color="success" >Выберите категорию товаров
                            :</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            color="success"
                            focused
                            value={categoriesQuery}
                            label="Age"
                            onChange={(e) => {
                                const newCategories = e.target.value
                                setCategoriesQuery(newCategories)
                            }}
                        >
                            <MenuItem value={"fruits"}>🍏 Фрукты</MenuItem>
                            <MenuItem value={"vegetables"}>🍅 Овощи</MenuItem>
                            <MenuItem value={"Dairy, egg products"}>🥛 Молочные, продукты яйцо</MenuItem>
                            <MenuItem value={"Meat,poultry"} >🥩 Мясо,птица</MenuItem>
                            <MenuItem value={"Berries, greens"}>🍒 Ягоды, зелень</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div >
                <Container maxWidth="lg">
                    <Grid container spacing={1}>
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
                </Container>}
            </div>
        </>
    )
}

export default AllProducts