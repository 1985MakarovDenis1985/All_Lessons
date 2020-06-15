import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


class Contacts extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>
                <div className="about">
                    <h1>Contacts</h1>
                </div>
            </div>
        );
    }
}

export default Contacts