import React from "react"
import "./css/Header.css"
import logo from "./img/logo.png"


class Header extends React.Component{

    render(){
        return (
            <div className="app-header">
                <div className="app-logo-space">
                    <img src={logo} className="app-logo-product" alt="space"></img>
                    <h2>Bekas Telescopes</h2>
                </div>
            </div>
        )
    }

}

export default Header;