import React, { Component } from 'react';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text : 'About Parents Y'
        };
        WPRC.setComponent( 'Contact', this );
    }

    render() {
        return (
            <div>Hello From Contact and</div>
        );
    }
}

export default Contact;