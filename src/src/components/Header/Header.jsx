import './Header.css'
import React, { useRef } from "react"
import {
    AppBar,
    Container,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    DialogTitle, FormControl, Grid, TextField,
    Toolbar,
    Typography
} from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import {makeStyles} from '@mui/styles';
import Button from "@mui/material/Button";
import {NavLink} from "react-router-dom";

import useAppContext from "../../hooks/useAppContext";
import {useState} from "react";
import { FoodBank } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1
    }
}))

const user = {
    login: 'dolgish',
    password: '0000',
    name: 'nikita'
}

const Header = () => {

    const [users , setUsers]= useState([])

    fetch('http://localhost:8080/api/buyer')
        .then((response)=>{
                     return response.json()
                    })
        .then((json)=>{
            console.log(json)
        })


    const clasess = useStyles()

    const [name,setName]=useState('')
    const handleNameChange = (e) =>{
        setName(e.target.value)
        console.log(name)
    }

    const [login,setLogin]=useState('')
    const handleLoginChange = (e) =>{
        setLogin(e.target.value)
    }

    const [password,setPassword]=useState('')
    const handlePasswordChange = (e) =>{
        setPassword(e.target.value)
    }

    const [openInput, setOpenInput] = React.useState(false)

    const [isLoggedIn,setIsLoggedIn]= useState(localStorage.getItem('isLoggedIn'))

    const handleClickOpenInput = () => {
        setOpenInput(true)
    }

    const handleCloseInput = () => {
        setOpenInput(false)
    }

    const handleInput = (e) => {
        e.preventDefault()
        localStorage.clear()
        localStorage.setItem('isLoggedIn',false)
        setOpenInput(false)
        setIsLoggedIn(!isLoggedIn)
    }

    const [openRegistration, setOpenRegistration] = React.useState(false)

    const handleClickOpenRegistration = () => {
        setOpenRegistration(true)
    }

    const handleCloseRegistration = () => {
        setOpenRegistration(false)
    }

    const [openExit,setOpenExit] = useState(false)

    const handleClickExitInput =()=>{
        setOpenExit(true)
    }

    const handleExit = ()=>{
        setIsLoggedIn(!isLoggedIn)
        setOpenExit(false)
    }

    const handleCloseExit = (e) =>{
        e.preventDefault()
        localStorage.clear()
        setIsLoggedIn(!isLoggedIn)
        setOpenExit(false)
    }


    const context = useAppContext()

    const cartCount = context.cartList.length
    

    const registrationFormRef = useRef(null)

    const authorizationFormRef = useRef(null)

    return (
        <div>
            <AppBar position='fixed' color="success">
                <Container fixed>
                    <Toolbar>
                        <Grid container>
                            <Grid item md={isLoggedIn ? 10 : 8}>
                                <NavLink to="/catalog" className='item'>
                                    <Typography variant='h6' className={clasess.title}>Eco Place</Typography>
                                </NavLink>
                            </Grid>
                            {  isLoggedIn ? ''
                                :
                                <Grid item md={1}>
                                    <Button color="inherit" variant="outlined"
                                            onClick={handleClickOpenInput}>Вход</Button>

                                <form action="">
                                    <Dialog open={openInput} onClose={handleCloseInput}
                                            aria-labelledby="form-dialog-title-log-in">
                                        <DialogTitle id="form-dialog-title-log-in">Вход</DialogTitle>
                                        <DialogContent>
                                            <DialogContentText>log in to select products</DialogContentText>
                                            <form ref={authorizationFormRef} onSubmit={(e)=>{
                                                e.preventDefault()
                                                const formData = new FormData(authorizationFormRef.current); 
                                                const login = formData.get('login')
                                                const password = formData.get('password')

                                                console.log(login, password)
    
                                                fetch('http://localhost:8080/api/buyer/authorize', {
                                                    method: 'POST',
                                                    body:JSON.stringify({
                                                        login,
                                                        password,
                                                    }),
                                                    headers: new Headers({'content-type': 'application/json'}),
                                                }).then((res)=>{
                                                    //status - 200 OK
                                                    //status - 400 неправильные данные
                                                    if(res.status===200){
                                                        //вошел
                                                    }
                                                    else{
                                                        //не вошел
                                                    }
                                                })
                                            }}>
                                            <TextField
                                                color="success"
                                                autoFocus
                                                margin="dance"
                                                name='login'
                                                id="name"
                                                label="Name"
                                                type="Name"
                                                onChange={handleNameChange}
                                                fullWidth
                                            />
                                            <TextField
                                                color="success"
                                                autoFocus
                                                margin="dance"
                                                id="login"
                                                label="Log in"
                                                type="log in"
                                                onChange={handleLoginChange}
                                                fullWidth
                                            />
                                            <TextField
<<<<<<< HEAD
                                                color="success"
=======
                                                name='password'
>>>>>>> 70c181e4c88f69669f86d9d41bd393f6cb8d88ab
                                                autoFocus
                                                margin="dance"
                                                id="password"
                                                label="Password"
                                                type="Password"
                                                onChange={handlePasswordChange}
                                                fullWidth
                                            />
                                                <Button type="submit">
                                                 Войти
                                                </Button>
                                            </form>
                                        </DialogContent>
                                    </Dialog>
                                </form>
                            </Grid>
                            }
                            {
                                isLoggedIn ?
                                    <Grid item md={1}>
                                        <Button onClick={handleClickExitInput}
                                                color="inherit"
                                                variant="text"
                                                size="large"
                                                startIcon={<LogoutIcon/>}>
                                        </Button>
                                        <Dialog open={openExit}
                                                onClose={handleExit}
                                                aria-labelledby="form-dialog-title-exit">
                                            <DialogTitle id="form-dialog-title-exit"> Выход </DialogTitle>
                                            <DialogContent>
                                                <DialogContentText>Вы уверены, что хотите выйти?</DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                                <Button onClick={handleCloseExit} color="primary">Выйти</Button>
                                            </DialogActions>
                                        </Dialog>

                                    </Grid>
                                    :
                                <Grid item md={2}>
                                <Button color="secondary" variant="contained"
                                        onClick={handleClickOpenRegistration}>Регистрация</Button>
                                <Dialog open={openRegistration} onClose={handleCloseRegistration}
                                        aria-describedby="form-dialog-title-registration">
                                    <DialogTitle id="form-dialog-title-registration">Регистрация</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>Registration</DialogContentText>
                                        <form ref ={registrationFormRef} 
                                        onSubmit={(e)=>{
                                            e.preventDefault()
                                            const formData = new FormData(registrationFormRef.current); 
                                            const login = formData.get('login')
                                            const password = formData.get('password')
                                            const name = formData.get('name')

                                            const formBody =JSON.stringify({
                                                login,
                                                password,
                                                name
                                            })

                                            console.log(formBody)

                                            fetch('http://localhost:8080/api/buyer', {
                                                method: 'POST',
                                                body: formBody,
                                                headers: new Headers({'content-type': 'application/json'})
                                            }).then((res)=>console.log(res))
                                        }
                                        }>
                                        <TextField
                                            color="success"
                                            autoFocus
                                            margin="dance"
                                            id="name"
                                            label="Name"
                                            type="Name"
                                            fullWidth
                                            name='login'
                                        />
                                        <TextField
                                            color="success"
                                            autoFocus
                                            margin="dance"
                                            id="login"
                                            label="Log in"
                                            type="log in"
                                            fullWidth
                                        />
                                        <TextField
                                            color="success"
                                            autoFocus
                                            margin="dance"
                                            id="password"
                                            label="Password"
                                            type="Password"
                                            fullWidth
                                            name='password'
                                        />
                                          <TextField
                                            autoFocus
                                            margin="dance"
                                            id="name"
                                            label="Name"
                                            fullWidth
                                            name='name'
                                        />
                                        <Button type="submit">
                                            Зарегистрироваться
                                        </Button>
                                     </form>
                                    </DialogContent>
                                </Dialog>
                            </Grid>}
                            <Grid item>
                                <NavLink to="/basket" className='item'> <Button
                                    color="inherit"
                                    variant="text"
                                    size="large"
                                    startIcon={<AddShoppingCartIcon/>}>
                                    {/*{setitemsInCart(addToBasket? itemsInCart+1: itemsInCart)}*/}
                                </Button>
                                    {cartCount}
                                </NavLink>
                            </Grid>
                        </Grid>
                        <Grid item>
                                <NavLink to="/create-product" className='item'> 
                                <Button
                                    color="inherit"
                                    variant="text"
                                    size="large"
                                    startIcon={<FoodBank/>}>
                                    {/*{setitemsInCart(addToBasket? itemsInCart+1: itemsInCart)}*/}
                            </Button>
                                </NavLink>
                            </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    )
}
export default Header