import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Footer extends Component {
    render(){
        return (
            <footer class="" id="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-7 footer-copyright">
                            © Uptrend Network - All rights reserved
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default withRouter(Footer);