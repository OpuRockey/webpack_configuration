import React, { Component } from 'react';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : 'My Dashboard',
        };
        WPRC.setComponent( 'Home', this );
    }

    UNSAFE_componentWillMount() {
        console.log('UNSAFE_componentWillMount')
    }
    componentDidMount() {
        console.log('CcomponentDidMount')
    }
    UNSAFE_componentWillReceiveProps(newProps) {
        console.log('CUNSAFE_componentWillReceiveProps -' , newProps)
    }
    shouldComponentUpdate(newProps, newState) {
        console.log('shouldComponentUpdate -' , newProps, newState)
        return true;
    }
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.log('UNSAFE_componentWillUpdate -', nextProps, nextState);
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate - ' , prevProps, prevState)
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }

    render() {
        return (
            <div>
                <h1>{ this.state.title }</h1>
                <div id="welcome-panel" className="welcome-panel">
                    <div className="welcome-panel-content">
                        <h2>Welcome to WordPress!</h2>
                        <p className="about-description">We’ve assembled some links to get you started:</p>
                        <div className="welcome-panel-column-container">
                            <div className="welcome-panel-column">
                                <h3>Get Started</h3>
                                <a className="button button-primary button-hero load-customize hide-if-no-customize"
                                   href="http://127.0.0.1/projects/erp_attendence/wp-admin/customize.php">Customize Your
                                    Site</a>
                                <a className="button button-primary button-hero hide-if-customize"
                                   href="http://127.0.0.1/projects/erp_attendence/wp-admin/themes.php">Customize Your
                                    Site</a>
                                <p className="hide-if-no-customize">or, <a
                                    href="http://127.0.0.1/projects/erp_attendence/wp-admin/customize.php?autofocus[panel]=themes">change
                                    your theme completely</a></p>
                            </div>
                            <div className="welcome-panel-column">
                                <h3>Next Steps</h3>
                                <ul>
                                    <li><a href="http://127.0.0.1/projects/erp_attendence/wp-admin/post-new.php"
                                           className="welcome-icon welcome-write-blog">Write your first blog post</a>
                                    </li>
                                    <li><a
                                        href="http://127.0.0.1/projects/erp_attendence/wp-admin/post-new.php?post_type=page"
                                        className="welcome-icon welcome-add-page">Add an About page</a></li>
                                    <li><a
                                        href="http://127.0.0.1/projects/erp_attendence/wp-admin/customize.php?autofocus[section]=static_front_page"
                                        className="welcome-icon welcome-setup-home">Set up your homepage</a></li>
                                    <li><a href="http://127.0.0.1/projects/erp_attendence/"
                                           className="welcome-icon welcome-view-site">View your site</a></li>
                                </ul>
                            </div>
                            <div className="welcome-panel-column welcome-panel-last">
                                <h3>More Actions</h3>
                                <ul>
                                    <li>
                                        <div className="welcome-icon welcome-widgets-menus">
                                            Manage <a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/widgets.php">widgets</a> or <a
                                            href="http://127.0.0.1/projects/erp_attendence/wp-admin/nav-menus.php">menus</a>
                                        </div>
                                    </li>
                                    <li><a
                                        href="http://127.0.0.1/projects/erp_attendence/wp-admin/options-discussion.php"
                                        className="welcome-icon welcome-comments">Turn comments on or off</a></li>
                                    <li><a href="https://codex.wordpress.org/First_Steps_With_WordPress"
                                           className="welcome-icon welcome-learn-more">Learn more about getting
                                        started</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;