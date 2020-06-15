import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';

class Contacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "CONTACTS",
            text: "Address: Canada, BC, Vancouver"
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

export default Contacts