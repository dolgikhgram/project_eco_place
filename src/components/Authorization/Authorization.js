import React from "react";

const Authorization=()=>{
    return(
        <form onSubmit={(e)=>{
            e.preventDefault()
            const userData ={
                login:e.target.elements[0].value,
                password: e.target.elements[1].value
            }

            console.log(userData)
        }}>
            <span>Авторизация</span>
            <input type="text"/>
            <input type="text"/>
            <button type="submit">Вход</button>
            <button type="submit">Регистрация</button>
        </form>
    )
}

export default Authorization