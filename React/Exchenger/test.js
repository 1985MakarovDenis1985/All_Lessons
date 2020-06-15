import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import CalculateBoby from "./CalculateBody/CalculateBody";
import Header from "./CalculateBody/Header";
import About from "./Routes/About";
import Contacts from "./Routes/Contacts";
import Form from "./CalculateBody/Form";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Router>
                    <Header/>
                    <Switch>
                        <Route exact path='/'><CalculateBoby/></Route>
                        <Route exact path='/about'><About/></Route>
                        <Route exact path='/contacts'><Contacts/></Route>
                        <Route exact path='/form'><Form/></Route>
                    </Switch>
                </Router>


            </div>
            // <Header/>
        )
    }
}

export default Test
