import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Props.css';



class Header extends Component {
    render() {
        return (
            <div className="header fixed flex aic">
                <div className="logo">
                <img src='/logo.png' alt="logo"/>
                </div>
                <div className="location rel flex aic">
                <i className="fa fa-search ico s21" aria-hidden="true"></i>
                <input className="label s16 font" value="INDIA"/>
                <button><i className="fa fa-chevron-down arro" aria-hidden="true"></i></button>
                </div>
                <div className="search flex aic">
                    <input type="text" placeholder="Find Cars,Mobile Phones and more..." className="query"></input>
                    <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="flex aic ">
                    <p>ENGLISH</p>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </div>
                <div className="aic sp">
                <i className="fa fa-bell-o" aria-hidden="true"></i>
                </div>
                <div className="sp flex aic">
                    <Link to="/account/sign" className="s12">sigin</Link>
                </div>
                <div className="sp flex aic">
                    
                    <i className="fa fa-plus" aria-hidden="true"></i>
                    <h2 className="s15 font">Sell</h2>
                    
                </div>
                <div></div>
                
            </div>
        );
    }
}

export default Header;