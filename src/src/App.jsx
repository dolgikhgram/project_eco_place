import './App.css';
import HistoryOfOrders from "./components/HistoryOfOrders/HistoryOfOrders";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Basket from "./components/Basket/Basket";
import Contacts from "./components/Contacts/Contacts";
import Catalog from './components/Catalog/Catalog'
import Authorization from './components/Authorization/Authorization';
import ProductPage from "./components/PtoductPage/ProductPage";
import {Context} from './consts'
import {useEffect, useState} from "react";
import CreateProduct from './components/CreateProduct/CreateProduct';


const App = () => {

    // const user = {
    //     login: 'dolgish',
    //     password: '0000',
    //     name: 'nikita'
    // }
    //
    // fetch('http://localhost:8080/api/buyer')
    //     .then((response)=>{
    //         console.log(response.json())
    //     })


    // fetch('http://localhost:8080/api/buyer', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8'
    //     },
    //     body: JSON.stringify(user)
    // })
    //
    //
    // let response = await fetch('http://localhost:8080/api/buyer', {
    //     method: 'GET',
    // })
    fetch('http://localhost:8080/api/buyer').then((res)=>console.log(res.json()))

    fetch('http://localhost:8080/api/buyer').then((res)=>console.log(res.json()))

    const [cartList, setCartList] = useState([])

    // const [posts, setPosts] =useState()

    // useEffect(()=>{
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(response => response.json())
    //         .then(json => {
    //             setPosts(json)
    //         })
    // })


    return (
        <BrowserRouter>
            <Context.Provider value={{
                cartList, setCartList
            }}>
            <div className='app-wrapper'>
                <Header />
                <div className='content-wrapper'>
                    {/*<Catalog/>*/}
                    <Routes>
                        <Route exact path="/catalog" element={<Catalog/>} />
                        <Route path="/" element={<Catalog/>} />
                        <Route exact path="/aboutUs" element={<AboutUs/>} />
                        <Route exact path="/basket" element={<Basket/>} />
                        <Route exact path="/contacts" element={<Contacts/>} />
                        <Route exact path="/authorization" element={<Authorization/>} />
                        <Route path="/product" element = {<ProductPage/>}/>
                        <Route path="/create-product" element = {<CreateProduct/>}/>
                        <Route path="/history-of-orders" element = {<HistoryOfOrders/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
            </Context.Provider>
        </BrowserRouter>

    )
}

export default App;
