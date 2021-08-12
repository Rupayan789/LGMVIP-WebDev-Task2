import React from 'react'
import './styles.scss'
const Navbar = (props) => {
   
    return (
        <div className="navbar-container">
            <div className="navbar-flex">
                <div className="flex-left" onClick={()=>props.isClickFunc()}>
                    RR App
                </div>
                <div className="flex-right">
                    <button className="btn-get-user" onClick={()=>props.handleClick()}>Get User</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Navbar
