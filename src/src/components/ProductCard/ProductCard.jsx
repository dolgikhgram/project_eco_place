import React, { useState} from "react";
import Button from "@mui/material/Button";


const ProductCard = ({name, imgLink, price}) => {
    const [addToBasket, setAddToBasket] = useState(true)
    const onAddToBasket = () => {
        setAddToBasket(!addToBasket)
    }
    return (
        <li className='products-element'>
            <span className='products-element__name'>{name}</span>
            <img className='products-element__img' src={imgLink}/>
            <span className='products-element__price'>{price}</span>
            <Button variant="contained" onClick={onAddToBasket} color = {addToBasket ? "success" : "secondary" }>{addToBasket ? "Добавить в корзину" : "Удалить из корзины"}</Button>
        </li>
    )
}

export default ProductCard