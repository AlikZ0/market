import "./style.css"
import React from 'react';

import search from "../../../../img/search.png"
import heart from "../../../../img/heart.png"
import storee from "../../../../img/storee.png"
import changee from "../../../../img/changee.png"


import nikon from "../../../../img/product-1.jpg";
import blueshirt from "../../../../img/product-2.jpg";
import lamp from "../../../../img/product-3.jpg";
import nikeshoes from "../../../../img/product-4.jpg";
import dron from "../../../../img/product-5.jpg";
import applewatch from "../../../../img/product-6.jpg";
import shirts from "../../../../img/product-7.jpg";
import shampoos from "../../../../img/product-8.jpg";

const products = [
     {
          image: nikon,
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
     },
     {
          image: dron,
          name: "Product Name Goes Here",
          price: "$123  $123.00",
     },
     {
          image: applewatch,
          name: "Product Name Goes Here",
          price: "$123  $123.00",
     },
     {
          image: shirts,
          name: "Product Name Goes Here",
          price: "$123  $123.00",
     },
     {
          image: shampoos,
          name: "Product Name Goes Here",
          price: "$123  $123.00",
     },
     {
        image: lamp,
        name: "Product Name Goes Here",
        price: "$123  $123.00",
   },
]








const Sort = () => {

     return (
          <div className="sort-cont">
             

    

               <div className="for-blocks-header">
                  {/* <h1 className="box-blocks">FEATURED PRODUCTS</h1> */}
                  <button>Sorting</button>
                  <button>Showing</button>
              </div>
              <div className="features-blocks">
                    {products.map((item, index) => (
                         <div className="boxes-features">
                            
                              <img className="features-img" style={{ width: '270px', height: "240px", }} src={item.image} alt="#" />
                               <div className="for-opacity">
                                   <img src={search} alt="#" />
                                   <img src={heart} alt="#" />
                                   <img src={storee} alt="#" />
                                   <img src={changee} alt="#" />
                               </div>
                              <div className="hover"></div>
                              <div className="features-info">

                                  <h3>{item.name}</h3> 
                                   <div>
                                  <h5> {item.price}</h5>
                                   </div>

                              </div>

                       
                     </div>
                    ))}
               </div>



          </div>


     )
};

export default Sort;