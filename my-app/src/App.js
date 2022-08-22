import logo from './logo.svg';
import { Route, Routes, useNavigate } from "react-router-dom";
import { ROUTER_NAMES } from "./routers";

import './App.css';
import './icon/style.css'
import HeaderComponent from './components/header-component';
// import FooterSlaid from './components/footer';
// import FooterSection1 from './components/footer1';
// import MiniSector from './components/footer1/minisector';
// import MiniPraduct from './components/footer2';
// import SectorImg from './components/footer3';
import Footer from './components/footer4';
import Home from './components/home';
import Shop from './shop';
import Contact from './contact';
import ShopDetail from './shopDetail';
import ShopingCart from './shopingCart';
import Checkout from './checkout-main';


function App() {
  return (
    <div className="A-s" style={{ backgroundColor: "#F5F5F5" }}>

      <HeaderComponent />
      <Routes>
        <Route path={ROUTER_NAMES.HOME} element={<Home/>}></Route>
        <Route path={ROUTER_NAMES.SHOP} element={<Shop/>}></Route>
        <Route path={ROUTER_NAMES.CONTACT} element={<Contact/>}></Route>
        <Route path={ROUTER_NAMES.SHOP_DETAIL} element={<ShopDetail/>}></Route>
        <Route path={ROUTER_NAMES.SHOPING_CART} element={<ShopingCart/>}></Route>
        <Route path={ROUTER_NAMES.CHECKOUT} element={<Checkout/>}></Route>
      </Routes>
      {/* <FooterSlaid/>
      <FooterSection1/>
       <MiniSector/>
       <MiniPraduct/>
        <SectorImg/>
        <MiniPraduct/>
      <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
