import React from "react";
import './Header.css'
import {
    AppBar,
    Box,
    Container,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle, TextField,
    Toolbar,
    Typography
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
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

const Header = () => {
    const clasess = useStyles()

    const [openInput, setOpenInput] = React.useState(false)

    const handleClickOpenInput = () => {
        setOpenInput(true)
    }

    const handleCloseInput = () => {
        setOpenInput(false)
    }

    const [openRegistration, setOpenRegistration] = React.useState(false)

    const handleClickOpenRegistration = () => {
        setOpenRegistration(true)
    }

    const handleCloseRegistration = () => {
        setOpenRegistration(false)
    }

    return (
        <div>
            <AppBar position='fixed' color="success">
                <Container fixed>
                    <Toolbar>
                        <Typography variant='h6' className={clasess.title}>Eco Place</Typography>
                        <Box mr={3}>
                            <Button color="inherit" variant="outlined" onClick={handleClickOpenInput}>Вход</Button>
                            <Dialog open={openInput} onClose={handleCloseInput}
                                    aria-labelledby="form-dialog-title-log-in">
                                <DialogTitle id="form-dialog-title-log-in">Вход</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>log in to select products</DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dance"
                                        id="name"
                                        label="Email Adress"
                                        type="email"
                                        fullWidth
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dance"
                                        id="pass"
                                        label="Password"
                                        type="Password"
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleCloseInput} color="primary">Закрыть</Button>
                                    <Button onClick={handleCloseInput} color="primary">Войти</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                        <Box>
                            <Button color="secondary" variant="contained"
                                    onClick={handleClickOpenRegistration}>Регистрация</Button>
                            <Dialog open={openRegistration} onClose={handleCloseRegistration}
                                    aria-describedby="form-dialog-title-registration">
                                <DialogTitle id="form-dialog-title-registration">Регистрация</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>Registration</DialogContentText>
                                    <TextField
                                        autoFocus
                                        msrgin="dense"
                                        id="name"
                                        label="Email Adress"
                                        type="email"
                                        fullWidth
                                    />
                                    <TextField
                                        autoFocus
                                        margin="dance"
                                        id="pass"
                                        label="Password"
                                        type="Password"
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleCloseRegistration} color="primary">Закрыть</Button>
                                    <Button onClick={handleCloseRegistration}
                                            color="primary">Зарегистрироваться</Button>
                                </DialogActions>
                            </Dialog>
                        </Box>
                        <Button color="inherit" variant="text" size="large" startIcon={<AddShoppingCartIcon/>}/>
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