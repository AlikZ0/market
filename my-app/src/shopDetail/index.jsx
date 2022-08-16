import React, { useEffect, useState } from "react";
import './style.css'
import { NavLink } from "react-router-dom";
import { ROUTER_NAMES } from "../routers";
import camera from "../img/product-1.jpg";
import blueshirt from "../img/product-2.jpg";
import lamp from "../img/product-3.jpg";
import nikeshoes from "../img/product-4.jpg";

//import bay from '../img/storee.png'
import search from "../img/search.png"
import heart from "../img/heart.png"
import storee from "../img/storee.png"
import changee from "../img/changee.png"

const ShopDetail = () => {




  //const text='YOU MAY ALSO LIKE '
  // const foo1=()=>{debugger
  //   let x=text
  //   text=x.toString([x.length-1])
  //  // text = text[text.length - 1] + text.substring(0, text.length - 1);
  // // textNode.data = text;
  // console.log(text);
  // }
  const products = [
    {
      image: camera,
      name: "Product Name Goes Here",
      price: "$123  $123.00",
    },
    {
      image: blueshirt,
      name: "Product Name Goes Here",
      price: "$123  $123.00",
    },
    {
      image: lamp,
      name: "Product Name Goes Here",
      price: "$123  $123.00",
    },
    {
      image: nikeshoes,
      name: "Product Name Goes Here",
      price: "$123  $123.00",
    }]
  const [get, set] = useState(1)
  const foo = (isvalu) => {
    if (isvalu) {
      set(get + 1)
    } else if (!isvalu) {
      if (get > 1) {
        set(get - 1)
      }
    }

  }
  useEffect(() => {
    if (get > 1) {
      localStorage.setItem('counter', get.toString())
    }
  }, [get])

  return <div>
    <div >
      <div className="App G-flex" style={{ background: 'white', fontSize: "30px", color: ' gray' }}>
        <h4 style={{ fontSize: "25px" }}><NavLink to={ROUTER_NAMES.HOME} style={{ color: 'currentcolor' }}> Home</NavLink> </h4>
        <span style={{ margin: "2px", fontSize: "24px" }}>/</span>
        <h4 style={{ fontSize: "25px" }}><NavLink to={ROUTER_NAMES.SHOP} style={{ color: 'currentcolor' }}>Shop </NavLink></h4>
        <span style={{ margin: "1px", fontSize: "39px" }}>/</span>
        <h4 style={{ textDecorationLine: 'underline', fontSize: '42px' }}> Shop Detail</h4>
      </div>
      <div className="App G-flex" >
        <div style={{ width: "50%", marginTop: "25px" }}>
          <img src={camera} alt="" />
        </div>
        <div style={{ width: "50%", marginTop: "25px", background: 'white' }}>
          <h2 style={{ margin: "5%" }}>Product Name Goes Here</h2>
          <h4 style={{ margin: ' 6%', fontSize: "33px" }}>$150</h4>
          <p style={{ color: 'darkgray', margin: '2%' }}>Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea.
            Sanc ipsum et, labore clita lorem magna duo dolor no sea Nonumy

          </p>
          <div className="G-flex S_button" style={{ width: '50%', margin: '10%' }}>
            <button onClick={() => foo(false)} >-</button>
            <span>{get}</span>
            <button onClick={() => foo(true)}>+</button>
            <button className="Add-to-cart" style={{ marginLeft: '3%', width: '60%' }} ><img src={storee} alt="" /> Add To Cart</button>

          </div>

        </div>
      </div>
      <div className="App" style={{ margin: '' }}>
        <div className="L-button" style={{ margin: '10px', backgroundColor: 'white' }}>
          <button>Description</button>
          <button>Information</button>
          <button>Reviews ({get})</button>
          <h2 style={{ padding: '1%', margin: '1%' }}>Product Description</h2>
          <h5>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit
            rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</h5>
          <h5 id="info-padding" >Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem
            dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</h5>
        </div>
      </div>
      <div className=" App A_after" style={{ color: '#3D464D' }} >
        <h1 style={{ margin: '1%', width: '26%' }} >YOU MAY ALSO LIKE</h1>
      </div>
      <div className=" App G-flex ">
        {products.map((item, index) => (
          <div style={{ width: "25%",margin:'22px' }}>
            <img className="G-img" src={item.image} alt="" style={{ width: '100%' }} />
            <div className="for-opacity">
              <img src={search} alt="#" />
              <img src={heart} alt="#" />
              <img src={storee} alt="#" />
              <img src={changee} alt="#" />
            </div>
            <div className="hover"></div>
            <div className="features-info">

              <h3 style={{padding:'5%'}}>{item.name}</h3>
              <div>
                <h5> {item.price}</h5>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
}
export default ShopDetail