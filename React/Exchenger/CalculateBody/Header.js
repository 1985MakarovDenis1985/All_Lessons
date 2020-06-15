import React from "react";
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

class Header extends React.Component{
    constructor(props) {
        super(props);

        this.state = {

        }
    }


    render() {
        return (
            <div className='main_container'>
                <div className="advertisment"></div>
                <div className="title_block_cover">
                    <div className="title_block"></div>
                </div>
                <div className="nav">
                    <ul>
                        <li><Link to='/'>title</Link></li>
                        <li><Link to='/about'>about</Link></li>
                        <li><Link to='/contacts'>contacts</Link></li>
                        <li><Link to='/form'>form</Link></li>
                    </ul>
                </div>
            </div>
        );
    }

}

export default Header