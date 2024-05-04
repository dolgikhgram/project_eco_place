const ProductCard = ({name , imgLink , price})=>{
    return (
        <li className='products-element'>
                    <span className='products-element__name'>{name}</span>
                    <img className='products-element__img' src={imgLink}/>
                    <span className='products-element__price'>{price}</span>
                    <button className='products-element__btn'> Добавить в корзину </button>
                </li>
    )
}

export default ProductCard