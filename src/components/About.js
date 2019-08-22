import React, { Component } from 'react';
import AboutMine from './AboutMine';
import AboutParents from './AboutParents'

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : 'About i'
        };
        WPRC.setComponent( 'About', this );
    }

    componentWillUnmount() {
        console.log('componentWillUnmount About')
    }

    render() {
        return (
            <div>
                <div>Hello From {this.state.title}</div>
                <AboutMine/>
                <AboutParents/>
            </div>
        );
    }
}

export default About;