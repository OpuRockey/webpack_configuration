import React, { Component } from "react";
import Home from './components/Home' ;
import About from './components/About' ;
import Contact from './components/Contact' ;
import Error from './components/Error' ;
import { HashRouter , Route , Switch } from 'react-router-dom';

import store from './store/store';

class App extends Component {
    constructor(props) {
        super(props);
        console.log(store);
    }

    render() {
        return (
            <div className="wrap">
                <HashRouter>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route component={Error}/>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
export default App;