import React from "react";
import {NavLink} from "react-router-dom";
import './Header.css'
import {AppBar, Box, Container, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu'
import {makeStyles} from '@mui/styles';
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}))

const Header = ()=>{
const clasess = useStyles()

    return(
        <div>
            <AppBar  position='fixed' color="success" >
                <Container fixed>
                    <Toolbar>
                        <IconButton edge = "start" color="inherit" aria-label="menu" >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant='h6' className={clasess.title}>Eco Place</Typography>
                        <Box mr={3}>
                            <Button color="inherit" variant="outlined">Вход</Button>
                        </Box>
                        <Button color="secondary" variant="contained">Регистрация</Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>


        // <header className='header-wrapper'>
        //     <div className='head-container'>
        //         <span className='logo'>Eco Place</span>
        //         <div className='nav'>
        //             <NavLink to ="/authorization" className='item'> Авторизация</NavLink>
        //             <NavLink to = "/catalog" className='item'> Каталог</NavLink>
        //             <NavLink to = "/aboutUs" className='item'>   Про нас</NavLink>
        //             <NavLink to="/contacts" className='item'>   Контакты</NavLink>
        //             <NavLink to ="/basket" className='item'>   Корзина 🗑️</NavLink>
        //         </div>
        //     </div>
        // </header>

    )
}

export default Header