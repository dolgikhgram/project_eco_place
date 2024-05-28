import React, {useState} from "react";
import useAppContext from "../../hooks/useAppContext";
import {CATALOG} from '../../data'
import {
    Box,
    Button,
    Container,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    Grid, InputLabel, MenuItem, Select, TextField
} from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import BasketCard from "./components/basket-card/BasketCard";
import './Basket.css'

const Basket = () => {
    const {cartList, setCartList} = useAppContext()

    const [openBuy, setOpenBuy] = useState()

    const handleClickBuy = () => {
        setOpenBuy(true)
    }

    const handleCloseBuy = () => {
        setOpenBuy(false)
    }

    const [city, setCity] = useState('')

    const handleChange = (e) => {
        const newValue = e.target.value;
        setCity(newValue)
        console.log(city)
    }

    const handleBuy = () => {

    }


    return (
        <div>
            <Grid className='basket' container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid item md={12}>
                    <Container maxWidth="lg">
                        <Grid container spacing={1}>
                            <ul className='products-container'>
                                {cartList.map((el) => (
                                    <Grid item key={el + 'grid'} xs={4} sm={6} md={12}>
                                        <BasketCard
                                            key={el}
                                            name={CATALOG[el].name}
                                            price={CATALOG[el].price}
                                            imgLink={CATALOG[el].img}
                                            id={el}
                                        />
                                    </Grid>

                                ))}
                            </ul>
                        </Grid>
                    </Container>
                </Grid>
                <Grid item md={12}>
                    <Box>
                        <Button className='bt-item'   color="success" variant="contained" onClick={handleClickBuy}>Купить</Button>
                        <Dialog open={openBuy} onClose={handleCloseBuy} aria-labelledby="form-dialog-title-buy">
                            <DialogTitle id="form-dialog-title-buy">Покупка</DialogTitle>
                            <DialogContent>
                                <DialogContentText>Укажите Город</DialogContentText>
                                <FormControl fullWidth>
                                    <InputLabel color="success" id="demo-simple-select-label">Город</InputLabel>
                                    <Select
                                        color="success"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="City"
                                        value={city}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={"Kursk"}>Курск</MenuItem>
                                        <MenuItem value={"SaintPetersburg"}>Санкт-Петербург</MenuItem>
                                        <MenuItem value={"Moscow"}>Москва</MenuItem>
                                    </Select>
                                    <TextField
                                        color="success"
                                        autoFocus
                                        margin="dense"
                                        id="adress"
                                        label="Укажите адрес"
                                        type="adress"
                                        fullWidth
                                    />
                                </FormControl>
                            </DialogContent>
                            <DialogActions>
                                <Button fullWidth onClick={handleBuy} color="success" variant="contained">Купить</Button>
                            </DialogActions>
                        </Dialog>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Basket