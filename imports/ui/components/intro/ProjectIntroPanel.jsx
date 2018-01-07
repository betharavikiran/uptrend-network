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
        targets: '.project-slide .letters',
        opacity: 0,
        duration: 1
    }).add({
        targets: '.project-slide',
        translateX: [-1000, 0],
        opacity: [0, 1],
        duration: 1200
    }).add({
        targets: '.project-slide .project-img',
        rotate: 360,
        duration: 1000,
        opacity: [0, 1],
        translateY: [-500, 0],
        delay: 200
    }).add({
        targets: '.project-slide .ml3',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        translateY: [-500, 0],
        duration: ml4.durationIn
    }).add({
        targets: '.project-slide .ml4 .letters-1',
        opacity: ml4.opacityIn,
        scale: ml4.scaleIn,
        translateX: [-500, 0],
        duration: ml4.durationIn
    })
    .add({
        targets: '.project-slide .ml14 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: "easeInOutExpo",
        duration: 900
    }).add({
        targets: '.project-slide .ml14 .letters-2',
        opacity: [0, 1],
        translateX: [40, 0],
        translateZ: 0,
        scaleX: [0.3, 1],
        easing: "easeOutExpo",
        duration: 800,
        offset: '-=600',
        delay: function (el, i) {
            return 150 + 25 * i;
        }
    }).add({
        targets: '.project-slide .project-summary',
        opacity: [0, 1],
        translateX: [-40, 0],
        duration: 500,
        easing: "easeOutExpo",
        delay: function (el, i) {
            return 300 + 25 * i;
        }
    }).add({
        targets: '#btn-project-intro',
        translateY: '-13rem',
        translateX: '5rem',
        rotate: 360,
        borderRadius: '8px',
        duration: 3000,
        easing: [.91,-0.54,.29,1.56],
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

class ProjectIntro extends Component {

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
            <section id="home">
                <div className="container">
                    <div className="row project-slide">
                        <div className="col-md-offset-1 col-md-2 col-sm-3 project-img">
                            <img src="images/decentralized-network.png" className="img-responsive" alt="about image"/>
                        </div>
                        <div className="col-md-8 col-sm-8 project-content">
                            <h1 className="ml3">Want to promote <strong>Decentralized Project ?</strong></h1>
                            <h3 className="ml4">
                                <span className="letters letters-1">Has strong <strong>Utility</strong> backed by <strong>Technology</strong>...</span>
                            </h3>
                            <hr/>
                            <br/>
                            <h3 className="ml14">
                              <span className="text-wrapper">
                                <span className="letters-2">We have to the power to move <strong>Markets</strong></span>
                                <span className="line"></span>
                              </span>
                            </h3>
                            <div className="row project-summary">
                                <ul class="fa-ul">
                                    <li><i className="fa-li fa fa-check-square"></i>Reputed blogs in multiple Languages</li>
                                    <li><i className="fa-li fa fa-check-square"></i>100000+ followers on twitter</li>
                                </ul>
                                <div class="col-md-offset-9 col-md-3 col-sm-offset-3 col-sm-6">
                                    <button id="btn-project-intro" type="button" className="form-control" name="submit">Learn More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const ProjectIntroPanel = props => {
    return (
        <TransitionGroup>{
            <ProjectIntro key='ProjectIntro'/>
        }
        </TransitionGroup>
    )
}

ProjectIntroPanel.props = {
}

export default ProjectIntroPanel;
