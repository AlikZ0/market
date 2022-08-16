import React from "react";
import offer1 from '../../img/offer-1.jpg'
import offer2 from '../../img/offer-2.jpg'
import './style.css'
const SectorImg=()=>{
    return <div className=" App global-cont-shop">
    <div className="shpecial-box" style={{ backgroundImage: `url(${offer1})` }} >
    <div className="forfon-image">
     <div className="shop-topic">
     <h4>SAVE 20%</h4>
     <h3>Special Offer</h3>
     <button>Shop Now</button>
     </div>
    </div>

    </div>
    <div className="shpecial-box" style={{ backgroundImage: `url(${offer2})` }}>
    <div className="forfon-image">
    <div className="shop-topic">
    <h4>SAVE 20%</h4>
     <h3>Special Offer</h3>
     <button>Shop Now</button>
    </div>
    </div>
    </div>


</div>

}
export default SectorImg