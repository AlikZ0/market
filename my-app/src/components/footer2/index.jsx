import React, { useState } from "react";
import './style.css'

import nikon from "../../img/product-1.jpg";
import blueshirt from "../../img/product-2.jpg";
import lamp from "../../img/product-3.jpg";
import nikeshoes from "../../img/product-4.jpg";
import dron from "../../img/product-5.jpg";
import applewatch from "../../img/product-6.jpg";
import shirts from "../../img/product-7.jpg";
import shampoos from "../../img/product-8.jpg";
// import shampoos from "../../img/product-9.jpg"
// import heart from "../../img/heart.png"
// import storee from "../../img/storee.png"
// import changee from "../../img/changee.png"
import search from "../../img/search.png"
import heart from "../../img/heart.png"
import storee from "../../img/storee.png"
import changee from "../../img/changee.png"

const MiniPraduct = () => {
    const [get, set] = useState([nikon, blueshirt, lamp, nikeshoes, dron, applewatch, shirts, shampoos, shampoos])
    const [img, setimg] = useState()
    const [num, setnum] = useState(0)
    const foox = () => {
        setimg(get[num])
        setnum(num + 1)
        if (num == 8) {

            setnum(0)

        }

    }

    const products = [
        {
            image: nikon,
            names: "Product Name Goes Here",
            price: "123.00",
        },
        {
            image: blueshirt,
            names: "Product Name Goes Here",
            price: "$123.00",
        },
        {
            image: lamp,
            names: "Product Name Goes Here",
            price: "$123.00",
        },
        {
            image: nikeshoes,
            names: "Product Name Goes Here",
            price: "$123.00",
        },
        {
            image: dron,
            names: "Product Name Goes Here",
            price: "$123.00",
        },
        {
            image: applewatch,
            names: "Product Name Goes Here",
            price: "$123.00",
        },
        {
            image: shirts,
            names: "Product Name Goes Here",
            price: "$123.00",
        },
        {
            image: shampoos,
            names: "Product Name Goes Here",
            price: "$123.00",
        },
    ]

    return <div>
        <div className="for-header-name App" style={{ margin: 10 + 'px' + 'auto' }}>
            <h1 className="products">FEATURED PRODUCTS</h1>
            <img src={img} alt="" />
            {/* <h3><strike>$123</strike></h3>
            <button onClick={foox}>clik me</button> */}
        </div>
        <div className=" App features-blocks">
            {products.map((item, index) => (
                <div className="boxes-features" key={index}>

                    <img className="features-img" style={{ width: '270px', height: "240px", }} src={item.image} alt="#" />
                    <div className="for-opacity">
                        <img src={search} alt="#" />
                                   <img src={heart} alt="#" />
                                   <img src={storee} alt="#" />
                                   <img src={changee} alt="#" />
                    </div>
                    <div className="hover"></div>
                    <div className="features-info">

                        <h3>{item.names}</h3>
                        <div>
                            <h5> <strike>$123</strike>{item.price}</h5>
                        </div>
                    </div>


                </div>
            ))}
        </div>

    </div>

}

export default MiniPraduct