import React, { Component } from 'react';

class AboutMine extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text : 'About Mine Y'
        };
        WPRC.setComponent( 'AboutMine', this );
    }

    render() {
        return (
            <div>Hello From {this.state.text}</div>
        );
    }
}

export default AboutMine;