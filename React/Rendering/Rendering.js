import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PropTypes from 'prop-types'
// ----------------------------------
import Children from "./Children";


const ConditionRender = ({val}) => {
    if (val >= 10) { return <h2> More than 10</h2> }
    else { return <h3>Less than 10</h3> }
};

const Tab1 = () =>{
    return <h1>Tab 1</h1>
}
const Tab2 = () =>{
    return <h1>Tab 2</h1>
}
const Tab3 = () =>{
    return <h1>Tab 3</h1>
}


class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: 0
        }
    }
    handleTab = (e) => {
        this.setState({
            activeTab: +e.target.getAttribute("data-name")
            // activeTab: e.target.dataset.name // или так
        })
    }

    render() {
        const {activeTab} = this.state
        return (
            <div>
                {/*через обычное условие*/}
                <div>
                    <ConditionRender val = {13} />
                </div>

                {/*через state*/}
                <button data-name = {1} onClick={this.handleTab}>Tab 1</button>
                <button data-name = {2} onClick={this.handleTab}>Tab 2</button>
                <button data-name = {3} onClick={this.handleTab}>Tab 3</button>

                {/*появляется только по определению activeTab*/}
                {/*{activeTab === 1 && <Tab1/>}*/}
                {/*{activeTab === 2 && <Tab2/>}*/}
                {/*{activeTab === 3 && <Tab3/>}*/}

                {/*можно так*/}
                {activeTab === 1 ? <Tab1/> : activeTab === 2 ? <Tab2/> : <Tab3/>}
            </div>
        )
    }
}

export default Content
