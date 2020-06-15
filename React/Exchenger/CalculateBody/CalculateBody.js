import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
////-----------------------------------------

import Rate from "./Rate";
// import Header from "./Header";


class CalculateBoby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Hello"
        }
    }

    render() {
        return (

            <div className="content_body">
                <Router>
                    {/*<Header/>*/}
                    <Rate/>
                </Router>

            </div>

        )
    }
}

export default CalculateBoby