import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

class Other extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "404",
            text: "Page not found"
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

export default Other