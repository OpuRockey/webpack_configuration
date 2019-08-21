import React, { Component } from 'react';

class AboutParents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text : 'About Parents Y'
        };
        WPRC.setComponent( 'AboutParents', this );
    }

    click( event ) {
        WPRC.AboutMine.setState({
            text : event.target.id
        });
    }

    test(param) {
        console.log(param);
    }

    componentDidMount() {
        WPRC.apiProcessData( 'https://jsonplaceholder.typicode.com/users', 'get', {} ).then( res => {
            WPRC.AboutMine.setState({
                text : res.status
            });
        } );
    }

    render() {
        return (
            <div>
                Hello From {this.state.text}
                <button id={'somethex'} onClick={(event) => { this.click(event) }}>Click</button>
            </div>
        );
    }
}

export default AboutParents;