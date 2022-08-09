import React from "react";
import "./style.css"
//import {useSelector} from "react-redux";



const HeaderComponent = () => {
 
  

  return <header className="G-flex flex-between" style={{backgroundColor:'#3D464D ',margin:0,padding:0}}>
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
    <span className="G-flex"  style={{margin:5+"px",cursor:"pointer",Font:40+'px'}}>
      <h1 style={{backgroundColor:"#6C757D",color:'#FFD333',paddingRight:5+'px',fontSize:40+'px'}}>MULTI</h1>
      <h1 style={{backgroundColor: '#FFD333',color:"#6C757D",paddingRight:5+'px',fontSize:40+'px'}}>SHOP</h1>
    </span>
    <ul className="G-flex" >
      <li>Home</li>
      <li>Shop</li>
      <li>Contact</li>
    </ul>
  </header>
}

export default HeaderComponent