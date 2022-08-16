import React from "react";
import './style.css'
import MiniPraduct from "../components/footer2";
import { NavLink } from "react-router-dom";
import { ROUTER_NAMES } from "../routers";
import Sort from "./conpomonet/component/product-sort";

const Shop = () => {
    return <div>
        <div className="App G-flex" style={{ background: 'white', fontSize: "30px", color: ' gray' }}>
            <h4 style={{ fontSize: "25px" }}><NavLink to={ROUTER_NAMES.HOME} style={{ color: 'currentcolor' }}> Home</NavLink> </h4>
            <span style={{ margin: "2px", fontSize: "24px" }}>/</span>
            <h4 style={{ fontSize: "25px" }}><NavLink to={ROUTER_NAMES.SHOP} style={{ color: 'currentcolor' }}>Shop </NavLink></h4>
            <span style={{ margin: "1px", fontSize: "39px" }}>/</span>
            <h4 style={{ textDecorationLine: 'underline', fontSize: '42px' }}> Shop List</h4>
        </div>
        <div className="App G-flex" style={{ marginTop: "3%" }}>
            <div style={{ width: "25%", marginRight: "3%" }}>
                <div className="L-ShopList" style={{}}>
                    <h4 style={{ width: '50%' }}>FILTER BY PRICE</h4>
                </div>
                <div style={{ background: 'white',marginTop:'25px' }}>
                    <div className="flex-between boxes-checkox">
                        <div className="G-flex L-checkbox">
                            {/* <input type="checkbox" style={{transform:"scale(1.5)"}}/> */}
                            <input type="checkbox" style={{ margin: 'auto 3px' }} />
                            <h6 className="G-flex-center">All Price</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>100</span>
                        </div>
                    </div>
                    <div className="flex-between boxes-checkox" s>
                        <div className="G-flex L-checkbox">

                            <input type="checkbox" style={{ margin: 'auto 3px' }} />
                            <h6 className="G-flex-center" style={{ fontSize: '14px' }}>$0 - $100</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>150</span>
                        </div>
                    </div>

                    <div className="flex-between boxes-checkox" s>
                        <div className="G-flex L-checkbox">

                            <input type="checkbox" style={{ margin: 'auto 3px' }} />
                            <h6 className="G-flex-center" style={{ fontSize: '14px' }}>$100 - $200</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>149</span>
                        </div>

                    </div>
                    <div className="flex-between boxes-checkox" s>
                        <div className="G-flex L-checkbox">

                            <input type="checkbox" style={{ margin: 'auto 3px' }} />
                            <h6 className="G-flex-center" style={{ fontSize: '14px' }}>$200 - $300</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>121</span>
                        </div>
                    </div>
                    <div className="flex-between boxes-checkox" s>
                        <div className="G-flex L-checkbox">

                            <input type="checkbox" style={{ margin: 'auto 3px' }} />
                            <h6 className="G-flex-center" style={{ fontSize: '14px' }}>$300 - $400</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>109</span>
                        </div>
                    </div>
                    <div className="flex-between boxes-checkox" s>
                        <div className="G-flex L-checkbox">

                            <input type="checkbox" style={{ margin: 'auto 3px' }} />
                            <h6 className="G-flex-center" style={{ fontSize: '14px' }}>$400 - $500</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>100</span>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop:'25px'}}>
                <div className="L-ShopList" style={{}}>
                    <h4 style={{ width: '50%' }}>FILTER BY COLOR</h4>
                </div>
                </div>
                <div style={{marginTop:'25px' ,background: 'white',}}>
                <div className="flex-between boxes-checkox" style={{marginTop:'1px'}}>
                        <div className="G-flex L-checkbox">
                            
                            <input type="checkbox" style={{ margin: 'auto 3px' }} />
                            <h6 className="G-flex-center">All Color</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>10000</span>
                        </div>
                        


                    </div>
                    <div className="flex-between boxes-checkox" style={{marginTop:'1px'}}>
                        <div className="G-flex L-checkbox">
                            
                            <input type="checkbox" style={{ margin: 'auto 3px' }} />
                            <h6 className="G-flex-center">Black</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>1500</span>
                        </div>
                        


                    </div>
                    <div className="flex-between boxes-checkox" style={{marginTop:'1px'}}>
                        <div className="G-flex L-checkbox">
                            
                            <input type="checkbox" style={{ margin: 'auto 3px' }} />
                            <h6 className="G-flex-center">White</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>999</span>
                        </div>
                        


                    </div>
                    <div className="flex-between boxes-checkox" style={{marginTop:'1px'}}>
                        <div className="G-flex L-checkbox">
                            
                            <input type="checkbox" style={{ margin: 'auto 3px' }} />
                            <h6 className="G-flex-center">Red</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>361</span>
                        </div>
                        


                    </div>
                    <div className="flex-between boxes-checkox" style={{marginTop:'1px'}}>
                        <div className="G-flex L-checkbox">
                            
                            <input type="checkbox" style={{ margin: 'auto 3px' }} />
                            <h6 className="G-flex-center">Blue</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>235</span>
                        </div>
                        


                    </div>
                    <div className="flex-between boxes-checkox" style={{marginTop:'1px'}}>
                        <div className="G-flex L-checkbox">
                            
                            <input type="checkbox" style={{ margin: 'auto 3px' }} />
                            <h6 className="G-flex-center">Green</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>221</span>
                        </div>
                        


                    </div>
                    
               
                </div>


            </div>

            <div style={{ width: "75%", background: 'pink' }}>
                {/* <div className="G-flex-raigth">
                    <button>Sorting</button>
                    <button>Showing</button>
                </div> */}<Sort/>

            </div>


        </div>
    </div>
}

export default Shop