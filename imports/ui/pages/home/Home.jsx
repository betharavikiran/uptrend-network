import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import ProjectIntroPanel from '../../components/intro/ProjectIntroPanel';
import InvestmentIntroPanel from '../../components/intro/InvestmentIntroPanel';

export default class Home extends Component {
    state = {
        wait: true
    };

    componentDidMount() {
        setTimeout(() => this.setState({ wait: false }), 5000);
    }

    renderInvestmentIntro(){
        if(!this.state.wait){
            return (
                <InvestmentIntroPanel/>
            );
        }else{
            return null;
        }
    }

    render() {
        return (
            <div>
                <ProjectIntroPanel/>
                {this.renderInvestmentIntro()}
            </div>
        );
    }
}
