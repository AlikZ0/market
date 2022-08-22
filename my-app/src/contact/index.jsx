import React, { useEffect, useState } from "react";
import './style.css'
import { NavLink } from "react-router-dom";
import { ROUTER_NAMES } from "../routers";

const Contact = () => {
    const [get, set] = useState({
       Name:'',
       Email:'',
       Subject:'',
       Message:''

    })
    const onchencke = (e) => {
        set({...get, [e.target.name]: e.target.value})
        // console.log(e);
      }
    //   useEffect(()=>{
    //     console.log(get);
    //   },[get.Name])

    return <div>
        <div className="App G-flex" style={{ background: 'white', fontSize: "30px", color: ' gray' }}>
            <h4 style={{ fontSize: "25px" }}><NavLink to={ROUTER_NAMES.HOME} style={{ color: 'currentcolor' }}> Home</NavLink> </h4>
            <span style={{ margin: "1px", fontSize: "39px" }}>/</span>
            <h4 style={{ textDecorationLine: 'underline', fontSize: '42px' }}> Contact</h4>
        </div>
        <div className="App L-Contact-US" style={{}}>

            <h1 style={{ margin: "15px" }}>CONTACT US</h1>

        </div>
        <div className="App G-flex ">
            <div className="P-input" style={{ background: 'white', width: "50%" }}>
                <label>
                    <input name='Name' type="Name" placeholder='Your Name' onChange={onchencke} />
                </label>
                <label>
                    <input name='Email' type="Email" placeholder='Your Email' onChange={onchencke}/>
                </label>
                <label>
                    <input type="text" placeholder='Subject' name="Subject" onChange={onchencke}/>
                </label>
                <label>
                    <input className='message' type="text" name="Message" placeholder='Message'onChange={onchencke} />
                </label>
                <button>Send Message</button>
            </div>
            <div div className="" style={{ background: 'rgb(245, 245, 245)', width: "47%" }}>
                <div className='box-for-iframe' style={{ width: "100%" }}>
                    <iframe className='iframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d918.07650149806!2d-43.38914!3d-23.012534000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa62b20f8f46e46bd!2sQuiosque%20Sol%20Da%20Barra!5e0!3m2!1sen!2sth!4v1655650210755!5m2!1sen!2sth" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{
                        width: "88%", marginLeft: "10%", height: "248px"
                    }}></iframe>

                </div>
                <div className='box-for-lokation' style={{marginLeft:"10%"}}>
                    <p>123 Street, New York, USA</p>
                    <p>info@example.com</p>
                    <p>+012 345 67890</p>
                </div>

            </div>
        </div>

    </div>
}
export default Contact