import React, { useState } from "react";
import './style.css'
import MiniPraduct from "../components/footer2";
import { NavLink } from "react-router-dom";
import { ROUTER_NAMES } from "../routers";
import Sort from "./conpomonet/component/product-sort";
import { useEffect } from "react";


const userData = [
    { names: '$0 - $100', chap: "150", isChecked: false },
    { names: '$100 - $200', chap: "145", isChecked: false },
    { names: '$200 - $300', chap: "121", isChecked: false },
    { names: '$300 - $400', chap: "109", isChecked: false },
    { names: '$400 - $500', chap: "101", isChecked: false },
]
const usersColor = [
    { names: 'Black', chap: "1500", isChecked: false },
    { names: 'White', chap: "999", isChecked: false },
    { names: 'Red', chap: "361", isChecked: false },
    { names: 'Blue', chap: "235", isChecked: false },
    { names: 'Green', chap: "221", isChecked: false },
]

const Shop = () => {
    const [users, setUsers] = useState([])
    const [userColor, setUserColor] = useState([])
    useEffect(() => {
        setUsers(userData)
        setUserColor(usersColor)
    }, [])
    const [checked, setChecked] = useState(false)
    //const [get, set] = useState(false)

    const handleChange = (e,index) => {
        //debugger
        const { checked } = e.target

        if (!index&& index!==0) {
            let tempUsers = users.map(user => { return { ...user, isChecked: checked } })
            console.log(checked);
            setUsers(tempUsers)

        } else {
            let tempUsers = users.map((user,is) =>
                index === is ? { ...user, isChecked: checked } : user)
            console.log(checked);
            setUsers(tempUsers)
        }
    };
    const colorChange = (e, index) => {
        const {  checked } = e.target
        console.log(index);
        if (!index&& index!==0) {
            setUserColor(userColor.map(user => { return { ...user, isChecked: checked } }))
        } else {


            setUserColor(userColor => userColor.map((user, is) => {
                if (is === index) {
                    return { ...user, isChecked: checked }
                } else {
                    return user
                }
            }))
        }
    }
    const Change = () => {
        setChecked(!checked);
        console.log(checked);
    };

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

                <div style={{ background: 'white', marginTop: '25px' }}>
                    <div className="flex-between boxes-checkox">
                        <div className="G-flex L-checkbox">
                            {/* <input type="checkbox" style={{transform:"scale(1.5)"}}/> */}
                            <input type="checkbox" style={{ margin: 'auto 3px' }} name='Price'
                                // checked={users.filter((user) => user.isChecked !== true).length < 1}
                                onChange={handleChange}
                            />
                            <h6 className="G-flex-center">All Price</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>1000</span>
                        </div>
                    </div>
                    {
                        users.map((user, index) => (
                            <div className="flex-between boxes-checkox" key={index}>
                                <div className="G-flex L-checkbox">

                                    <input type="checkbox" style={{ margin: 'auto 3px' }} name={user.names}
                                        checked={user.isChecked}
                                        onChange={(e)=>handleChange(e,index)}

                                    />
                                    <h6 className="G-flex-center" style={{ fontSize: '14px' }}>{user.names}</h6>
                                </div>
                                <div className="G-flex-raigth">
                                    <span>{user.chap}</span>
                                </div>
                            </div>
                        ))}

                    {/* <div className="flex-between boxes-checkox" >
                        <div className="G-flex L-checkbox">

                            <input type="checkbox" style={{ margin: 'auto 3px' }}  name='Price' 
                             checked={5>2?checked:false}
                             onChange={handleChange}
                            
                            />
                            <h6 className="G-flex-center" style={{ fontSize: '14px' }}>$0 - $100</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>150</span>
                        </div>
                    </div>

                    <div className="flex-between boxes-checkox" >
                        <div className="G-flex L-checkbox">

                            <input type="checkbox" style={{ margin: 'auto 3px' }}   name='Price'/>
                            <h6 className="G-flex-center" style={{ fontSize: '14px' }}>$100 - $200</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>149</span>
                        </div>

                    </div>
                    <div className="flex-between boxes-checkox" >
                        <div className="G-flex L-checkbox">

                            <input type="checkbox" style={{ margin: 'auto 3px' }} />
                            <h6 className="G-flex-center" style={{ fontSize: '14px' }}>$200 - $300</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>121</span>
                        </div>
                    </div>
                    <div className="flex-between boxes-checkox" >
                        <div className="G-flex L-checkbox">

                            <input type="checkbox" style={{ margin: 'auto 3px' }} />
                            <h6 className="G-flex-center" style={{ fontSize: '14px' }}>$300 - $400</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>109</span>
                        </div>
                    </div>
                    <div className="flex-between boxes-checkox" >
                        <div className="G-flex L-checkbox">

                            <input type="checkbox" style={{ margin: 'auto 3px' }} />
                            <h6 className="G-flex-center" style={{ fontSize: '14px' }}>$400 - $500</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>100</span>
                        </div>
                    </div> */}
                </div>
                <div style={{ marginTop: '25px' }}>
                    <div className="L-ShopList" style={{}}>
                        <h4 style={{ width: '50%' }}>FILTER BY COLOR</h4>
                    </div>
                </div>
                <div style={{ marginTop: '25px', background: 'white', }}>
                    <div className="flex-between boxes-checkox" style={{ marginTop: '1px' }}>
                        <div className="G-flex L-checkbox">

                            <input type="checkbox" style={{ margin: 'auto 3px' }}
                                onChange={colorChange} />
                            <h6 className="G-flex-center">All Color</h6>
                        </div>
                        <div className="G-flex-raigth">
                            <span>10000</span>
                        </div>
                    </div>
                    {
                        userColor.map((color, index) => (

                            <div className="flex-between boxes-checkox" style={{ marginTop: '1px' }} key={index}>
                                <div className="G-flex L-checkbox">

                                    <input type="checkbox" style={{ margin: 'auto 3px' }}
                                        checked={color.isChecked}
                                        onChange={(e) => colorChange(e, index)}
                                    />
                                    <h6 className="G-flex-center">{color.names}</h6>
                                </div>
                                <div className="G-flex-raigth">
                                    <span>{color.chap}</span>
                                </div>
                            </div>
                        ))}
                </div>


            </div>

            <div style={{ width: "75%", background: 'pink' }}>
                {/* <div className="G-flex-raigth">
                    <button>Sorting</button>
                    <button>Showing</button>
                </div> */}<Sort />

            </div>


        </div>
    </div>
}

export default Shop