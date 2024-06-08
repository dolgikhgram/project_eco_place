import React from "react";
import { useNavigate } from "react-router-dom";

const HistoryOfOrdersCards = ({name, imgLink, price, id}) => {
    const navigate = useNavigate()

    const redirectToProduct=()=>navigate(`/product?id=${id}`)
    return (
        <li className='products-element'>
            <span className='products-element__name'>{name}</span>
            <img className='products-element__img' src={imgLink} onClick={redirectToProduct}/>
            <span className='products-element__price'>{price}</span>
        </li>
    )
}

export default HistoryOfOrdersCards