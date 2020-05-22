import React from 'react';
import ReactDOM from 'react-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Hello"
        }
    }

    render() {
        return (
            <div>
                it`s a home
            </div>
        );
    }

}

export default Home