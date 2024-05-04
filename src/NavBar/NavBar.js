import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className='navbar-wrapper'>

            Категории товаров

            <div className='position'>
                <NavLink to="/catalog/vegetablesFruits">Овощи,фрукты</NavLink>
            </div>
            <div className='position'>
                <NavLink to="/catalog/dairyProducts">Молочные продукты,яйцо</NavLink>
            </div>
            <div className='position'>
                <NavLink to="/catalog/meat">Мясо,птица</NavLink>
            </div>
            <div className='position'>
                <NavLink to="/catalog/berries">Ягоды,зелень</NavLink>
            </div>
        </div>
    )
}

export default NavBar