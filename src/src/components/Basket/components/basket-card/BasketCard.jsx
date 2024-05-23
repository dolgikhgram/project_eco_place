import React, { useState} from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../../../hooks/useAppContext";


const BasketCard = ({name, imgLink, price, id}) => {

    const {cartList, setCartList} = useAppContext()



    const onAddToBasket = () => {

        if(cartList.findIndex((el)=>el===id)!==-1){
            const newCartList=cartList.filter((el)=>el!==id)
            setCartList(newCartList)
        }


    }
    const navigate = useNavigate()

    const redirectToProduct=()=>navigate(`/product?id=${id}`)
    return (
        <li className='products-element'>
            <span className='products-element__name'>{name}</span>
            <img className='products-element__img' src={imgLink} onClick={redirectToProduct}/>
            <span className='products-element__price'>{price}</span>
            <Button
                variant="contained"
                onClick={onAddToBasket}
                color={'secondary'}
            >
                Удалить из корзины
            </Button>
        </li>
    )
}

export default BasketCard