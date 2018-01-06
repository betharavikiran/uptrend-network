import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Nav from './Nav';

class Header extends Component {
    render(){
        return (
            <Nav/>
        );
    }
}

export default withRouter(Header);