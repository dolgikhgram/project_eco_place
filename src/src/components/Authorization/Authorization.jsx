import React from "react";
import './Authorization.css'

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
            <div className='authorization-wrapper'>
                <h1>Авторизация</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                </div>
                <button type="submit" className='authorization-btn'>Вход</button>
                <button type="submit" className='authorization-btn'>Регистрация</button>
            </div>

        </form>
    )
}

export default Authorization