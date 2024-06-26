import React, { useState} from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import useAppContext from "../../hooks/useAppContext";
import {useEffect} from "react";

const ProductCard = ({name, imgLink, price, id}) => {

    const {cartList, setCartList} = useAppContext()

    const [itemAdded, setItemAdded] = useState(true)

    const onAddToBasket = () => {
        setItemAdded(!itemAdded)
        if(cartList.findIndex((el)=>el===id)!==-1){
            const newCartList=cartList.filter((el)=>el!==id)

            setCartList(newCartList)
        }
        else{
            setCartList([...cartList, id])
        }
    }

    useEffect(()=>{
        if(cartList.findIndex((el)=>el=== id)!==-1){
            setItemAdded(false)
        }
    },[cartList])

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
                color={itemAdded?'success':'secondary'}
            >
                {itemAdded ? "Добавить в корзину" : "Удалить из корзины"}
            </Button>
        </li>
    )
}

export default ProductCard