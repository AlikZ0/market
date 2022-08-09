import React, { useEffect } from "react";
import { useState } from "react";
import ss from '../../img/carousel-1.jpg'
import sk from '../../img/carousel-2.jpg'
import sks from '../../img/carousel-3.jpg'
import offer1 from '../../img/offer-1.jpg'
import offer2 from '../../img/offer-2.jpg'







import './style.css'
const FooterSlaid = () => {
    const [imgs, setimg] = useState({
        img: ss,
        h1: 'Kids Fashion',
        p: 'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam'
    })
    const [num, setnum] = useState(0)
    //  useEffect(()=>{
    //  },[])


    // const int=setInterval(()=>{
    //     foo()
    // },1000)

    const foo = () => {

        console.log(num);
        if (num == 0) {
            let z = {
                img: sk,
                h1: 'Women Fashion',
                p: 'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam'
            }
            setnum(1)
            setimg(z)
        } else if (num == 1) {
            let y = {
                img: sks,
                h1: 'Kids Fashion',
                p: 'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam'
            }
            setnum(2)
            setimg(y)
        } else {
            let x = {
                img: ss,
                h1: 'Men Fashion',
                p: 'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam'
            }
            setnum(0)
            setimg(x)

        }
        console.log(num, '2');
    }

    return <div className="G-flex G-j-center" style={{ margin: 10 + 'px',marginTop:0+'px',marginBottom:0+'px', background: '#F5F5F5' }}>
        <div className="G-img P-Slaid " style={{ backgroundImage: `url(${imgs.img})`,margin:20+'px', color: 'while' }}>
            <h1>{imgs.h1}</h1>
            <p>{imgs.p}</p>
            <button onClick={foo}> clik  </button>
        </div>

        <div>
            <div >
                <img className="G-img" style={{width: 335+'px',height:200+'px',margin:10+'px' }} src={offer1} alt="" />
            </div>
            <div>
                <img className="G-img" style={{width: 335+'px',height:200+'px',margin:0+'px' }}  src={offer2} alt="" />
            </div>
            {/* <img src={imgs} alt="" /> */}

        </div>

    </div>

}
export default FooterSlaid