/* eslint-disable jsx-a11y/alt-text */
import React, {useRef, useState} from "react";

import ProductCard from "../ProductCard/ProductCard";
import { CATALOG } from "./data";
import { NavLink } from "react-router-dom";
const AllProducts =()=>{
    const inputRef= useRef(null)

    const [searchQuery, setSearchQuery] = useState()

    const onSearchChange = (e)=>{
        const newValue = e.target.value;
        setSearchQuery(newValue)
    }

    const productsList = CATALOG.filter((el)=>el.name.toLowerCase().match(searchQuery && searchQuery.toLowerCase()))

    return(
        <>
      Категории товаров
        //реализовать по тому же принципу что и поиск
        <select onChange={(e)=>{
            console.log(e.target.value)
        }}>
            <option value="fruits">Фрукты</option>
            <option value="vegetables">Овощи</option>
        </select>

        <div className='products'>
            <input
             ref={inputRef}
             type="search"
             className='search-txt'
             placeholder="Введите товар"
             style={{width: '100%', height: 40, marginBottom: 40}}
             onChange={onSearchChange}
            />

            <ul className='products-container'>
                {productsList.map((el, idx)=>(
                    <ProductCard
                        key={idx}
                        name={el.name}
                        price={el.price}
                        imgLink={el.img}
                    />
                ))}
            </ul>
        </div> 
         </>
    )
}

export default AllProducts