import React from 'react';
import ReactDOM from 'react-dom';

class Contacts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: "Contacts"
        }
    }

    render() {
        return(
            <div>
                Contacts
            </div>
        )
    }


}

export default Contacts