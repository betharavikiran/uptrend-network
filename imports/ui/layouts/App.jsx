import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';

import Home from './../pages/home/Home'

class App extends Component {
    state = {
        loading: true
    };

    componentDidMount() {
        setTimeout(() => this.setState({ loading: false }), 8000);
    }

    render() {
        const { loading } = this.state;

        if(loading) {
            return <Loading/>;
        }

        return (
            <Router>
                <div className="container">
                    <Header/>
                    <div className="row">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </Router>
        )
    }
}

export default  App;