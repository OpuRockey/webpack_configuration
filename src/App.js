import React, { Component } from "react";
import Home from './components/Home' ;
import About from './components/About' ;
import Contact from './components/Contact' ;
import Hrm from './components/hrm/hrm';



import Error from './components/Error' ;
import { HashRouter , Route , Switch } from 'react-router-dom';
import './store/store';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title : 'App'
        };
        WPRC.setComponent( 'App', this );
    }

    render() {
        return (
            <div className="wrap">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/hrm" component={Hrm}/>
                        <Route component={Error}/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
export default App;