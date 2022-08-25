import React from "react";
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";

import { NavLink, useNavigate } from "react-router-dom";
import { ROUTER_NAMES } from "../routers";
import nikon from "../img/product-1.jpg"
import './style.css'


const ShopingCart = () => {
    const dispatch = useDispatch()
    
    const navigate = useNavigate()
    const GoTo = () => {
        //    let x=navigator()
        //    x.ROUTER_NAMES.
        dispatch({type: "Shoping_Cart",payload: newPost1})
   
        navigate(ROUTER_NAMES.CHECKOUT)

    }
  


    const [items, setItems] = useState([
        {
            img: nikon,
            h4: 'Product Name',
            p: '150',
            counter: 3,
        },
         {
            img: nikon,
            h4: 'Product Name ',
            p: '320',
            counter: 2,
        },
        {
            img: nikon,
            h4: 'Product Name',
            p: '150',
            counter: 3,
        },
         {
            img: nikon,
            h4: 'Product Name ',
            p: '320',
            counter: 2,
        },
        {
            img: nikon,
            h4: 'Product Name',
            p: '150',
            counter: 3,
        },
         {
            img: nikon,
            h4: 'Product Name ',
            p: '320',
            counter: 2,
        },
        {
            img: nikon,
            h4: 'Product Name',
            p: '150',
            counter: 3,
        },
         {
            img: nikon,
            h4: 'Product Name ',
            p: '320',
            counter: 2,
        },
        {
            img: nikon,
            h4: 'Product Name',
            p: '150',
            counter: 3,
        },
         {
            img: nikon,
            h4: 'Product Name ',
            p: '320',
            counter: 2,
        },
        {
            img: nikon,
            h4: 'Product Name',
            p: '150',
            counter: 3,
        },
         {
            img: nikon,
            h4: 'Product Name ',
            p: '320',
            counter: 2,
        },
        

    ])
       const filtr=(indes,id)=>{
    //    debugger
     //   console.log(items);
        setItems(items.filter((vel,x)=>{return id!==x&&vel!==indes}))
            
        //    let i=items

        //    i.splice(id,1)
        //    setItems(i)
          // console.log(items.length);
       }

    // const prace = () => {
    //     let x = 0
    //     for (let i = 0; i < Newpost.length; i++) {
    //         x = x + Newpost[i]

    //     }

    //     return x * 0.9
    // }
    let Newpost = items.map((item) => {

        return item.counter * item.p
    })
    console.log(Newpost.length);
    let newPost1 = items.reduce((sum,item)=>(sum += (item.p * item.counter)),0)
    //console.log(newPost1,"-------------------------");
   

    useEffect(() => {

        let x=Newpost.length
        console.log(x);
        set(x)
        dispatch({type: "SET_LOVE",payload: get})

        //console.log(newPost1);

    }, [])
    const forsis = (is, indexs) => {
      

        //setItems(items => items.map(item => ({ ...item, counter: is ? item.counter + 1 : item.counter - 1 })))
        //  console.log(items[id]);
        // console.log(items,index
        setItems(items => items.map((item, itemIndex) => {
            if (itemIndex === indexs)
                return ({ ...item, counter: is ? item.counter + 1 : item.counter - 1 })
            else return item
        }))

    }
    const zoom = () => {
        // debugger
   
       // console.log(items);
    }

    const [get, set] = useState(0)

    const foo = () => {
        set(get + 1)
        zoom()
    }

    const foo1 = () => {
        if (get !== 0) {
            set(get - 1)
        }
    }

    return < div>

        <div className="App G-flex" style={{ background: 'white', fontSize: "30px", color: ' gray' }}>
            <h4 style={{ fontSize: "25px" }}><NavLink to={ROUTER_NAMES.HOME} style={{ color: 'currentcolor' }}> Home</NavLink> </h4>
            <span style={{ margin: "2px", fontSize: "24px" }}>/</span>
            <h4 style={{ fontSize: "25px" }}><NavLink to={ROUTER_NAMES.SHOP} style={{ color: 'currentcolor' }}>Shop </NavLink></h4>
            <span style={{ margin: "1px", fontSize: "39px" }}>/</span>
            <h4 style={{ textDecorationLine: 'underline', fontSize: '42px' }}> Shoping Cart</h4>
        </div>

        <div className="App cartis">
            <div className="ada">
                <div className="G-flex  aria">
                    <h4>Products</h4>
                    <h4>Price</h4>
                    <h4>Quantity</h4>
                    <h4>Total</h4>
                    <h4>Remove</h4>
                </div>
                {/* <div className="G-flex aria-box">
                    <div className="G-flex">
                        <img src={nikon} alt="" className=" G-img img-60-60" />
                        <h4>Product Name</h4>
                    </div>
                    <div>
                        <p>$150</p>
                    </div>
                    <div className="G-flex S_button">
                        <button className='function-btn' onClick={foo1}>-</button>
                        <span id="value-qnts">{get}</span>
                        <button className='function-btn' onClick={foo}>+</button>
                    </div>

                </div> */}
                {/* <div className='camera-box'>
                    <div className='name-product'>
                        <img src={nikon} alt="#" />
                        <h4>Product Name</h4>
                    </div>
                    <div className='box-price'>
                        <p>$150</p>
                    </div>
                    <div className='for-quanity'>
                        <div className="for-payments-quality">
                            <button className='function-btn' onClick={foo1}>-</button>
                            <button id="value-qnt">{get}</button>
                            <button className='function-btn' onClick={foo}>+</button>
                        </div>
                    </div>
                    <div className='total-price'>
                        <p>$150</p>
                    </div>
                    <div className='remove-btn'>
                        <button >✖</button>
                    </div>
                </div> */}


                {items.map((item, index) => {
                    return <div className='camera-box' key={index}>
                        <div className='name-product'>
                            <img src={item.img} alt="#" />
                            <h4>{item.h4}</h4>
                        </div>
                        <div className='box-price'>
                            <p>${item.p}</p>
                        </div>
                        <div className='for-quanity'>
                            <div className="for-payments-quality">
                                <button className='function-btn' onClick={() => forsis(false,  index)}>-</button>
                                {/* <input id="value-qnt" value={item.counter} /> */}
                                <button id="value-qnt">{item.counter}</button>
                                <button className='function-btn' onClick={() => forsis(true,  index)}>+</button>
                            </div>
                        </div>
                        <div className='total-price'>
                            <p>${item.p * item.counter}</p>
                        </div>
                        <div className='remove-btn'>
                            <button onClick={()=>filtr(item ,index)} >✖</button>
                        </div>
                    </div>
                })}
            </div>

            <div className="" style={{ width: '40%', marginLeft: '25px' }}>
                <div className='box-checkout'>
                    <div className='box-cupon-input'>
                        <label>
                            <input type="text" placeholder='Coupon Code' />
                            <button>Apply Coupon</button>
                        </label>
                    </div>
                    <div className="D-after">
                        <h2>CART SUMMARY</h2>
                    </div>
                    <div className='cont-checkout'>
                        <div className='box-topic-checkout'>

                            <div className='Subtotal-box'>
                                <h4>Subtotal</h4>
                               <p >+${newPost1+'   /    '}   -10% {/* ${newPost1*0.9}*/}</p> 
                            </div>
                            <div className='Subtotal-box'>
                                <h4>Shipping</h4>
                                <p>{  newPost1<10000? '$150' :"$75"}</p>
                            </div>
                            <div className="AFTER">
                                <div></div>
                            </div>
                            <div className='Subtotal-box'>
                                <h4>Total</h4>
                                <p>${newPost1*0.9 + +`${ newPost1<10000? 150 :75}`}</p>
                            </div>
                            <button onClick={GoTo}>Processed To Checkout</button>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
}

export default ShopingCart 