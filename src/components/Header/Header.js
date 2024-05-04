import React from "react";
import {NavLink} from "react-router-dom";

const Header = ()=>{

    return(
        <header className='header-wrapper'>
            <div>
                <span className='logo'>Eco Place</span>
                <div className='nav'>
                    <NavLink to ="/authorization"> Авторизация</NavLink>
                    <NavLink to = "/aboutUs">   Про нас</NavLink>
                    <NavLink to="/contacts">   Контакты</NavLink>
                    <NavLink to ="/basket">   Корзина 🗑️</NavLink>
                </div>
            </div>
        </header>

    )
}

export default Header