import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends Component {
    render(){
        return (
            <div className="navbar custom-navbar navbar-fixed-top" role="navigation">
                <div className="container">

                    <div className="navbar-header">
                        <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="icon icon-bar"></span>
                            <span className="icon icon-bar"></span>
                            <span className="icon icon-bar"></span>
                        </button>
                        <a href="/" className="navbar-brand">Uptrend Network</a>
                    </div>

                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a className="smoothScroll" href="#home">Home</a></li>
                            <li><a className="smoothScroll" href="#projects">Projects</a></li>
                            <li><a className="smoothScroll" href="#skill">Investments</a></li>
                            <li><a className="smoothScroll" href="#contact-us">Contact Us</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        );
    }
}

export default withRouter(Nav);