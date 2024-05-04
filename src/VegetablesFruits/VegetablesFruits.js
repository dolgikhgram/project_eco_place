import React from "react";

const VegetablesFruits = () => {
    return (
        <div className='products'>
            <ul className='products-container'>
                <li className='products-element'>
                    <span className='products-element__name'>Редис молодой пучок, 300г</span>
                    <img className='products-element__img' src="https://img.vkusvill.ru/pim/images/site_BigWebP/10ee4f0d-a99f-4fce-b451-53939a9d2df1.webp?1708381519.1079"/>
                    <span className='products-element__price'>💲204</span>
                    <button className='products-element__btn'> Добавить в корзину </button>
                </li>
                <li className='products-element'>
                    <span className='products-element__name'>Кабачки, 580г</span>
                    <img className='products-element__img' src="https://img.vkusvill.ru/pim/images/site_BigWebP/67260f9d-c033-4fb1-a45c-ae938155ee13.webp?1710456135.0641"/>
                    <span className='products-element__price'>💲284</span>
                    <button className='products-element__btn'> Добавить в корзину </button>
                </li>
                <li className='products-element'>
                    <span className='products-element__name'>Огурцы Луховицкие,500г</span>
                    <img className='products-element__img' src="https://img.vkusvill.ru/pim/images/site_BigWebP/45f21232-5b99-4aef-94ed-70c2e4719d0e.webp?1709761277.0292"/>
                    <span className='products-element__price'>💲217</span>
                    <button className='products-element__btn'> Добавить в корзину </button>
                </li>
            </ul>
        </div>
    )
}

export default VegetablesFruits
