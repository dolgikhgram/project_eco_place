import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Basket from "./components/Basket/Basket";
import Contacts from "./components/Contacts/Contacts";
import Catalog from './components/Catalog/Catalog'
import Authorization from './components/Authorization/Authorization';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <div className='content-wrapper'>
                    <Routes>
                        <Route exact path="/catalog" element={<Catalog/>}/>
                        <Route exact path="/aboutUs" element={<AboutUs/>}/>
                        <Route exact path="/basket" element={<Basket/>}/>
                        <Route exact path="/contacts" element={<Contacts/>}/>
                        <Route exact path="/authorization" element={<Authorization/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>

    )
}

export default App;
