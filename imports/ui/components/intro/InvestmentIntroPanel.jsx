import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import anime from 'animejs'

let currentAnimation;

var ml4 = {};
ml4.opacityIn = [0,1];
ml4.scaleIn = [0.2, 1];
ml4.scaleOut = 3;
ml4.durationIn = 800;
ml4.durationOut = 600;
ml4.delay = 500;

const clearCurrentAnimation = () => {
    if (currentAnimation) currentAnimation.pause()
}

const animateIn = (targetContainer) => {
    clearCurrentAnimation();

    $('.ml3 .letters').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    $('.ml14 .letters').each(function(){
        $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
    });

    currentAnimation = anime.timeline();
    currentAnimation.add({
        targets: '.investment-slide .letters',
        opacity: 0,
        duration: 1
    }).add({
        targets: '.investment-slide',
        translateY: [-1000, 0],
        opacity: [0, 1],
        duration: 800
    }).add({
        targets: '.investment-img',
        duration: 1000,
        opacity: [0, 1],
        translateX: [-500, 0],
        delay: 200
    }).add({
        targets: '.investment-slide .ml3',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        translateX: [500, 0],
        duration: ml4.durationIn
    }).add({
        targets: '.investment-slide .ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        translateY: [500, 0],
        duration: ml4.durationIn
    }).add({
            targets: '.investment-slide .ml14 .line',
            scaleX: [0, 1],
            opacity: [0.5, 1],
            easing: "easeInOutExpo",
            duration: 900
        }).add({
        targets: '.investment-slide .ml14 .letters-2',
        opacity: [0, 1],
        translateX: [-40, 0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutExpo",
        duration: 800,
        offset: '-=600',
        delay: function (el, i) {
            return 150 + 25 * i;
        }
    }).add({
        targets: '.investment-slide .investment-summary',
        opacity: [0, 1],
        translateX: [-40, 0],
        duration: 500,
        easing: "easeOutExpo",
        delay: function (el, i) {
            return 300 + 25 * i;
        }
    }).add({
        targets: '#btn-investment-intro',
        translateY: '-13rem',
        translateX: '5rem',
        //rotate: 360,
        borderRadius: '10px',
        duration: 3000,
        scale: {
            value: 1.1,
            delay: 150,
            duration: 850,
            easing: 'easeInOutExpo',
        },
    });
}

const animateOut = (targetContainer, callback) => {
    clearCurrentAnimation()
}

class InvestmentIntro extends Component {

    componentDidAppear () {
        animateIn(ReactDOM.findDOMNode(this))
    }
    componentDidEnter () {
        animateIn(ReactDOM.findDOMNode(this))
    }
    componentWillLeave (callback) {
        animateOut(ReactDOM.findDOMNode(this), callback)
    }

    render() {
        return (
            <section id="investment-intro">
                <div className="container">
                    <div className="row investment-slide">
                        <div className="col-md-offset-1 col-md-2 col-sm-3 investment">
                            <img src="images/price-chart.png" className="img-responsive" alt="about image"/>
                        </div>
                        <div className="col-md-8 col-sm-8 project-content">
                            <h1 className="ml3">Looking to invest <strong>long term in products ?</strong> </h1>
                            <h3 className="ml4">
                                <span className="letters letters-1">We do <strong>research</strong> for <strong>Cryptos,ICOs and Dapps</strong>...</span>
                            </h3>
                            <hr/>
                            <br/>
                            <h3 className="ml14">
                              <span className="text-wrapper">
                                <span className="letters-2">Follow us on <strong>Twitter</strong> to get signals</span>
                                <span className="line"></span>
                              </span>
                            </h3>
                            <div className="row investment-summary">
                                <ul class="fa-ul">
                                    <li><i className="fa-li fa fa-check-square"></i>Strong market rearch team.</li>
                                    <li><i className="fa-li fa fa-check-square"></i>Strong market presence.</li>
                                </ul>
                                <div class="col-md-offset-9 col-md-3 col-sm-offset-3 col-sm-6">
                                    <button id="btn-investment-intro" type="button" class="form-control" name="submit">Follow on Twitter</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const InvestmentIntroPanel = props => {
    return (
        <TransitionGroup>{
            <InvestmentIntro key='InvestmentIntro'/>
        }
        </TransitionGroup>
    )
}


InvestmentIntroPanel.props = {
}

export default InvestmentIntroPanel;
