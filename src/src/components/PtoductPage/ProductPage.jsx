import {Box, Container, Rating, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useSearchParams} from "react-router-dom";
import {CATALOG} from "../../data";
import useAppContext from "../../hooks/useAppContext";
import React, {useEffect, useState} from "react";

const ProductPage = ()=>{
    const [searchParams] = useSearchParams()
    const {cartList, setCartList} = useAppContext()

    const productId = searchParams.get('id')
    const product = CATALOG[productId]
    const {name, price, img, rating} = product

    const [itemAdded, setItemAdded] = useState(false)

    const onAddToBasket = () => {
        setItemAdded(!itemAdded)
        if(cartList.findIndex((el)=>el=== productId)!==-1){
            const newCartList=cartList.filter((el)=>el!==productId)

            setCartList(newCartList)
        }
        else{
            setCartList([...cartList, productId])
        }

    }
    useEffect((productId)=>{
        if(cartList.findIndex((el)=>el===productId) !==-1){
            setItemAdded(false)
        }
    },[])
    return (
        <Container style={{display: 'flex'}}>
            <Box>
                <Typography variant="h3" component="h3">
                    {name}
                </Typography>
                <Typography variant="h4" component="h4">
                    {price}
                </Typography>
                <Button
                    variant="contained"
                    onClick={onAddToBasket}
                    color={itemAdded?'secondary':'success'}>
                    {itemAdded ? "Удалить из корзины" :  "Добавить в корзину"}
                </Button>
            </Box>
            <Box>
                <img  src={img}/>
                <Rating value={rating}/>
            </Box>
        </Container>
    )
}

export default ProductPage