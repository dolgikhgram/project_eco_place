import './App.css';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import VegetablesFruits from "./VegetablesFruits/VegetablesFruits";
import NavBar from "./NavBar/NavBar";
import Berries from "./Berries/Berries";
import DairyProducts from "./DairyProducts/DairyProducts";
import Meat from "./Meat/Meat";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import Basket from "./Basket/Basket";
import Contacts from "./Contacts/Contacts";


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='content-wrapper'>
                    <Routes>
                        <Route exact path="/catalog/vegetablesFruits" element={<VegetablesFruits/>}/>
                        <Route exact path="/catalog/berries" element={<Berries/>}/>
                        <Route exact path="/catalog/dairyProducts" element={<DairyProducts/>}/>
                        <Route exact path="/catalog/meat" element={<Meat/>}/>
                        <Route exact path="/aboutUs" element={<AboutUs/>}/>
                        <Route exact path="/basket" element={<Basket/>}/>
                        <Route exact path="/contacts" element={<Contacts/>}/>
                    </Routes>

                </div>
                <Footer/>
            </div>
        </BrowserRouter>

    )
}

export default App;
