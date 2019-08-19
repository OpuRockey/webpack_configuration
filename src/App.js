import React, { Component } from "react";
import Navigation from './components/Navigation' ;
import Home from './components/Home' ;
import About from './components/About' ;
import Contact from './components/Contact' ;
import Error from './components/Error' ;
import { BrowserRouter, HashRouter , Route , Switch } from 'react-router-dom';

class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className="main-wrap">
                <HashRouter>
                    <div className="inner-container">
                        <div className="navigation">
                            <Navigation/>
                        </div>
                        <div className="content-wrap">
                            <Switch>
                                <Route path="/" component={Home} exact/>
                                <Route path="/about" component={About}/>
                                <Route path="/contact" component={Contact}/>
                                <Route component={Error}/>
                            </Switch>
                        </div>
                    </div>
                </HashRouter>
            </div>
        )
    }
}
export default App;