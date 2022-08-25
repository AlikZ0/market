import React, { useState } from "react";
import {NavLink} from "react-router-dom";
import {ROUTER_NAMES} from "../../routers";
import {useDispatch, useSelector} from "react-redux";

import "./style.css"
import love from "../../img/love.png"
import store from "../../img/store.png"
import { useEffect } from "react";

//import {useSelector} from "react-redux";



const HeaderComponent = () => {
  const contect=useSelector( (state)=>state.contactreducer.store )
  const loves=useSelector( (state)=>state.contactreducer.love )
 useEffect(()=>{
//console.log(contect,"undefined")
 },[contect])
  //console.log(contect,"dfff");
  // const s =+prompt()
  //**
  //**//
  const[a ,b]=useState(0)

  const [get,set]=useState({
    
    love:0,
    store: 0
  })
  // useEffect(()=>{
  //   let x = localStorage.getItem('counter')
  //   // console.log(a);
    
  //     b(x)
    
  // },[])
  

  return <header className="  G-flex flex-between" style={{backgroundColor:'#3D464D ',margin:0,padding:0}}>
   {/* <div className="G-flex" style={{margin:15+"px",width:150+'px',height:50+'px'}}>
     <span  style={{backgroundColor:"white",color:'black'}}>
      <h1>MULTI</h1>
    </span>
    <span style={{backgroundColor: '#FFD333',color:"white"}}>
      <h1>SHOP</h1>
    </span> 
    <h1 style={{backgroundColor:"white",color:'black'}}>MULTI</h1>
      <h1 style={{backgroundColor: '#FFD333',color:"white"}}>SHOP</h1> 
    </div>*/}
    <span className="G-flex"  style={{margin:5+"px",padding:5+'px',cursor:"pointer",height:60+'px' }}>
      <NavLink to={ROUTER_NAMES.HOME} className='G-flex'> 
      <h1 style={{backgroundColor:"#6C757D",color:'#FFD333',paddingRight:5+'px',fontSize:40+'px'}}>MULTI</h1>
      <h1 style={{backgroundColor: '#FFD333',color:"#6C757D",paddingRight:5+'px',fontSize:40+'px'}}>SHOP</h1>
      </NavLink>
    </span>
    <ul className="G-flex  L-headers" >
      <li><NavLink to={ROUTER_NAMES.HOME}>Home</NavLink></li>
      <li><NavLink to={ROUTER_NAMES.SHOP}>Shop</NavLink></li>
      <li> <NavLink to={ROUTER_NAMES.CONTACT}>Contact</NavLink></li>
    </ul>
    <ul className="bar-cont">
      <li className="for-love">
      <NavLink to={ROUTER_NAMES.SHOPING_CART} style={{ color: 'currentcolor' }}>  <img src={love} alt="" /></NavLink>
        <span>{loves}</span>
      </li>
      <li className="for-shop">
      <NavLink to={ROUTER_NAMES.SHOP_DETAIL} style={{ color: 'currentcolor' }}> <img  src={store} alt="" ></img> </NavLink> 
        {/* <img  src={store} alt="" ></img> */}
        <span >{contect>100? "99+":contect}</span>

      </li>
    </ul>
  </header>
}

export default HeaderComponent