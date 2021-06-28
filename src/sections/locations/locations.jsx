import React, {Component} from 'react';

import './locations.css'
import map from './map.png'

class Locations extends Component {
    render() {
        return (
            <div className="d-flex">
                <img src={map} alt=""/>
                <div className="d-flex flex-column align-items-center flex-grow-1 location">
                    <h1 className="locations-title">WHERE TO FIND US</h1>
                    <div className="spacer" />
                </div>
            </div>
        );
    }
}

export default Locations;