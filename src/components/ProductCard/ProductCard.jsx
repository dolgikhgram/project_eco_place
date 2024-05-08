import Button from "@mui/material/Button";

const ProductCard = ({name, imgLink, price}) => {
    return (
        <li className='products-element'>
            <span className='products-element__name'>{name}</span>
            <img className='products-element__img' src={imgLink}/>
            <span className='products-element__price'>{price}</span>
            <Button variant="contained" color="success">Добавить в корзину</Button>
        </li>
    )
}

export default ProductCard