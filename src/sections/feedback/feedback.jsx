import React, {Component} from 'react';

import './feedback.css'

class Feedback extends Component {
    render() {
        return (
            <div className="container feedback">
                <div className="d-flex flex-column align-items-center">
                    <div className="feedback-title">WHAT OUR CLIENTS SAY</div>
                    <div className="spacer"/>
                </div>
                <div className="row">
                    <div className="col-md d-flex flex-column">
                        <span className="feedback-name">Jennifer Lawrence</span>
                        <span className="feedback-type">CARDIO TRAINING</span>
                        <div className="comment d-flex">
                            <i className="fas fa-quote-right"></i>

                            <p className="feedback-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Assumenda
                                blanditiis commodi dignissimos dolorem est eum, ex fugit hic inventore ipsa maiores
                                minima
                                nam omnis, praesentium rem sed, sit soluta ullam!</p>
                        </div>
                    </div>
                    <div className="col-md d-flex flex-column">
                        <span className="feedback-name">Carla Gugino</span>
                        <span className="feedback-type">FUNCTIONAL TRAINING</span>
                        <div className="comment d-flex">
                            <i className="fas fa-quote-right"></i>

                            <p className="feedback-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Assumenda
                                blanditiis commodi dignissimos dolorem est eum, ex fugit hic inventore ipsa maiores
                                minima
                                nam omnis, praesentium rem sed, sit soluta ullam!</p>
                        </div>
                    </div>
                    <div className="col-md d-flex flex-column">
                        <span className="feedback-name">Michael Fassbender</span>
                        <span className="feedback-type">REHABILITATION</span>
                        <div className="comment d-flex">
                            <i className="fas fa-quote-right"></i>

                            <p className="feedback-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Assumenda
                                blanditiis commodi dignissimos dolorem est eum, ex fugit hic inventore ipsa maiores
                                minima
                                nam omnis, praesentium rem sed, sit soluta ullam!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Feedback;