import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

class About extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "ABOUT",
            text: "New IT Company!!!"
        }
    }


    render() {
        return (
            <div>
                <h3>{this.state.title}</h3><br/>
                <h3>{this.state.text}</h3>
            </div>
        )
    }
}

export default About