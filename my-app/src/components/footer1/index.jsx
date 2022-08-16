import React from "react";
import { useState } from "react";
import MiniSector from "./minisector";
import './style.css'



const FooterSection1 = () => {
    const [info, setInfo] = useState([
        {
            icon: 'icon-checkmark',
            Text: 'Quality Product'
        },
        {
            icon: 'icon-local_shipping_FILL0_wght400_GRAD0_opsz48',
            Text: 'Free Shipping'
        },
        {
            icon: 'icon-repeat_FILL0_wght400_GRAD0_opsz48',
            Text: '14-Day Return'
        },
        {
            icon: 'icon-phone',
            Text: '24/7 Support'
        },
    ])
    return <div  style={{ backgroundColor: '#F5F5F5' ,}}>
        {/* <div className="P-icon">
     <span className="icon-checkmark "><h1>Quality Product</h1></span>
    <i className="icon-checkmark G-center" style={{marginTop:25+'px',fontSize:40+'px',color:"#FFD333",marginRight:1+'px'}}></i>
    <h2 style={{color:'#3D464D'}}> Quality Product</h2>
    </div> */}
        <div className=" App G-flex G-j-center"  >
            {info.map((item, index) => {
                return <div className="P-icon " style={{ margin: 10 + 'px' }}>
                    <i className={item.icon} style={{ marginTop: 25 + 'px', fontSize: 40 + 'px', color: "#FFD333", marginRight: 1 + 'px' }}></i>
                    <h2 style={{ color: '#3D464D' }}> {item.Text}</h2>
                </div>
            })}
        </div>
        <div className="ss" >
        {/* <h2 className="L-after">
            <span>CATEGORIES</span>
        </h2> */}
        {/* <MiniSector/> */}
        </div>
    </div>
}
export default FooterSection1