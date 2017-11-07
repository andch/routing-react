// ./src/index.jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

class Home extends Component {
    render(){
        return (<h1>Home Page</h1>);
    }
}

// More components
class Car extends Component {
    render(){
        return (<h1>Cars page</h1>);
    }
}

class About extends Component {
    render(){
        return (<h1>About page</h1>);
    }
}

render(
    <Router>
        <div>
        <Route exact path="/" component={Home}/>
        <Route path="/cars" component={Car}/>
        <Route path="/about" component={About}/>
        </div>
    </Router>,
    document.getElementById('container')
);