import React, {PropTypes} from 'react'
import ReactDOM from 'react-dom'
import TransitionGroup from 'react-transition-group/TransitionGroup'
import anime from 'animejs'

let currentAnimation

const clearCurrentAnimation = () => {
    if (currentAnimation) currentAnimation.pause()
}

const animateIn = (target) => {
    clearCurrentAnimation();

    currentAnimation = anime.timeline({loop: true});

    currentAnimation.add({
            targets: '.ml5 .line',
            opacity: [0.5,1],
            scaleX: [0, 1],
            easing: "easeInOutExpo",
            duration: 700
        }).add({
        targets: '.ml5 .line',
        duration: 600,
        easing: "easeOutExpo",
        translateY: function(e, i, l) {
            var offset = -0.625 + 0.625*2*i;
            return offset + "em";
        }
    }).add({
        targets: '.ml5 .ampersand',
        opacity: [0,1],
        scaleY: [0.5, 1],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    }).add({
        targets: '.ml5 .letters-left',
        opacity: [0,1],
        translateX: ["0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=300'
    }).add({
        targets: '.ml5 .letters-right',
        opacity: [0,1],
        translateX: ["-0.5em", 0],
        easing: "easeOutExpo",
        duration: 600,
        offset: '-=600'
    }).add({
        targets: '.ml5',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    })
}

const animateOut = (gridContainer, callback) => {
    clearCurrentAnimation()
}

class Loading extends React.Component {
    componentDidAppear () {
        animateIn(ReactDOM.findDOMNode(this))
    }
    componentDidEnter () {
        animateIn(ReactDOM.findDOMNode(this))
    }

    render () {
        return (
            <div className="container1">
                <section className="loading">
                <h1 className="ml5">
                  <span className="text-wrapper">
                    <span className="line line1"></span>
                    <span className="letters letters-left">Uptrend</span>
                    <span className="letters ampersand"> </span>
                    <span className="letters letters-right">Network</span>
                    <span className="line line2"></span>
                  </span>
                </h1>
                </section>
            </div>
        )
    }
}

const LoadingPanel = props => {
    return (
        <TransitionGroup>{
            <Loading key='loading'/>
        }
        </TransitionGroup>
    )
}

LoadingPanel.props = {
    // items: PropTypes.array.isRequired
}

export default LoadingPanel;
