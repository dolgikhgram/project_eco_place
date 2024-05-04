import React, {useRef} from "react";
import {NavLink, useSearchParams} from "react-router-dom";

const Header = ()=>{

    const inputRef= useRef(null)

    const [searchParams, setSearchParams] = useSearchParams()

    return(
        <header className='header-wrapper'>
            <div>
                <span className='logo'>Eco Place</span>
                <input ref={inputRef} type="search" className='search-txt'></input>
                <button onClick={()=>setSearchParams({search: inputRef.current.value})} className='search-btn'>🔎</button>
                <div className='nav'>
                    <NavLink to ="/authorization">   Корзина 🗑️</NavLink>
                    <NavLink to = "/aboutUs">   Про нас</NavLink>
                    <NavLink to="/contacts">   Контакты</NavLink>
                    <NavLink to ="/basket">   Корзина 🗑️</NavLink>
                </div>
            </div>
        </header>

    )
}

export default Header