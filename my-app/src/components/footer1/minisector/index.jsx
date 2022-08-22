import React from "react";
import { useState } from "react";
import A1 from '../../../img/cat-1.jpg'
import A2 from '../../../img/cat-2.jpg'
import A3 from '../../../img/cat-3.jpg'
import A4 from '../../../img/cat-4.jpg'
// import A5 from '../../img/cat-5.jpg'
// import A6 from '../../img/cat-6.jpg'
 
const MiniSector =()=>{
    const [info, setInfo] = useState([
        {
            img:A1,
            names:"Category Name",
            praduct:"100 Products"
        },
        {
            img:A2,
            names:"Category Name",
            praduct:"100 Products"
        },
        {
            img:A3,
            names:"Category Name",
            praduct:"100 Products"
        },
        {
            img:A4,
            names:"Category Name",
            praduct:"100 Products"
        },
        {
            img:A4,
            names:"Category Name",
            praduct:"100 Products"
        },
        {
            img:A3,
            names:"Category Name",
            praduct:"100 Products"
        },
        {
            img:A2,
            names:"Category Name",
            praduct:"100 Products"
        },
        {
            img:A1,
            names:"Category Name",
            praduct:"100 Products"
        },
        {
            img:A2,
            names:"Category Name",
            praduct:"100 Products"
        },
        {
            img:A1,
            names:"Category Name",
            praduct:"100 Products"
        },
        {
            img:A4,
            names:"Category Name",
            praduct:"100 Products"
        },
        {
            img:A3,
            names:"Category Name",
            praduct:"100 Products"
        }
        
    ])
    return <div style={{background:"",width:100+'%'}} >
    <div  className="App">
    <h2 className="  L-after ">
        <span>CATEGORIES</span>
    </h2>
    
    </div>

  {/*   <div className=" App S-sector G-flex">
         <div className="G-flex">
            <img className="G-img P-Img" src={A1} alt="" />
            <div style={{marginLeft:10+'px'}}>
                <h4>Category Name</h4>
                <p>100 Products </p>
            </div>
            </div>
            <div className="G-flex">
            <img className="G-img P-Img" src={A1} alt="" />
            <div style={{marginLeft:10+'px'}}>
                <h4>Category Name</h4>
                <p>100 Products </p>
            </div>
        </div>  */}

       <div className="K-list App  ">
       {info.map((item,index)=>{
        return <div className="G-flex S-sector skal " kay={index} >
            <img className="G-img P-Img" src={item.img} alt="" />
            <div className="L-main" >
                <h4>{item.names}</h4>
                <p style={{color:'black'}}>100 Products </p>
            </div>
            </div>
       })}
       </div>
        

    {/* </div>  */}
    </div>
}
export default MiniSector