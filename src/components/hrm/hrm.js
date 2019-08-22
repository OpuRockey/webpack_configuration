import React, { Component } from 'react';
import { NavLink , Route , Switch } from 'react-router-dom'
import Employees from "./employees";
import Overview from "./overview";

class Hrm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : 'About i'
        };
        WPRC.setComponent( 'Hrm', this );
    }

    render() {
        return (
            <div>
                <div>
                    <NavLink to="/hrm/employees">Employee</NavLink>
                    <NavLink to="/hrm/overview">Overview</NavLink>
                </div>
                <Switch>
                    <Route path="/hrm" component={Overview} exact/>
                    <Route path="/hrm/employees" component={Employees}/>
                    <Route path="/hrm/overview" component={Overview}/>
                </Switch>
            </div>
        );
    }
}

export default Hrm;