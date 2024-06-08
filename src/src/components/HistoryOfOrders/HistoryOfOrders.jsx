import React, {useRef, useState} from "react";
import HistoryOfOrdersCards from "./HistoryOfOrdersCards";
import {CATALOG} from "../../data";
import '.././Catalog/Catalog.css'
import {Box, Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";

;

const HistoryOfOrders = () => {
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
            <div>
                <Box
                    style={{display: 'flex', flexDirection: 'column',   alignItems: 'center' }}>
                    <h1>История покупок</h1>
                    </Box>
                <Container maxWidth="lg">
                    <Grid container spacing={1}>
                        <ul className='products-container'>
                            {productsList.map((el, idx) => (
                                <Grid item key={idx + 'grid'} xs={4} sm={6} md={12}>
                                    <HistoryOfOrdersCards
                                        key={idx}
                                        name={el.name}
                                        price={el.price}
                                        imgLink={el.img}
                                        id={idx}
                                    />
                                </Grid>

                            ))}
                        </ul>
                    </Grid>
                </Container>
            </div>
        </>
    )
}

export default HistoryOfOrders
