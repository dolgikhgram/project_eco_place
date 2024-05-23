import React from "react";
import useAppContext from "../../hooks/useAppContext";
import {CATALOG} from '../../data'
import {Container, Grid} from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import BasketCard from "./components/basket-card/BasketCard";


const Basket = () => {
    const {cartList, setCartList} = useAppContext()

    return (
        <div>
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                    <ul className='products-container'>
                        {cartList.map((el) => (
                            <Grid item key={el + 'grid'} xs={4} sm={6} md={12}>
                                <BasketCard
                                    key={el}
                                    name={CATALOG[el].name}
                                    price={CATALOG[el].price}
                                    imgLink={CATALOG[el].img}
                                    id={el}
                                />
                            </Grid>

                        ))}
                    </ul>
                </Grid>
            </Container>}

            {/*// <ul className='products-container'>*/}
            {/*// {cartList.map((id) => CATALOG[id].name)}*/}
            {/*// </ul>*/}

        </div>
    )
}

export default Basket