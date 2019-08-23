import React, { Component } from 'react';

class Overview extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : 'About i'
        };
        WPRC.setComponent( 'Overview', this );
    }

    render() {
        return (
            <div>
                Hello From Overview
            </div>
        );
    }
}

export default Overview;