import React from "react";
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


class Form extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            secondName: ''
        }
    }




    changeValue = (e) => {
        e.preventDefault()
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    };
    submitDB = (e) => {
        e.preventDefault();
        let obj = {};
        Object.assign(obj, this.state)
        fetch(" http://localhost:3000/users", {
            method: 'post',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(obj)
        })
        console.log(obj)

    }

    render() {
        return(
            <div>
                <div className="about">
                    <h1>Form</h1>
                    <form onSubmit={this.submitDB} action="">
                        <input name='firstName' onChange={this.changeValue} type="text"/>
                        <input name='secondName' onChange={this.changeValue} type="text"/>
                        <input type="submit"/>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form