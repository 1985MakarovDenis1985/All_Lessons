import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// ----------------------------------
import Clock from "./Clock";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "Denis",
            secondName: '',
            selectOpt: '7'
        };
        this.chahge = this.chahge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.getDate = this.getDate.bind(this)

    }

    chahge = (e) => {
        const {name, value, type} = e.target;
        this.setState({[name]: value});
    };

    handleSubmit(e) {
        e.preventDefault();
        let obj = {}
        Object.assign(obj, this.state) // => получаем новый объект из стейт
        console.log(obj)
        this.getDate(obj) // => функция добавления в базу данных
    }

    getDate(obj) {  // // => функция добавления в базу данных
        return fetch("http://localhost:3000/users", {
            method: "post",
            headers: {
                'content-type' : 'application/json'
            }                      ,
            body:JSON.stringify(obj)
        })
    }
    render() {
        const {firstName, secondName, textArea, selectOpt} = this.state;
        return (
            <div>

                <form action="" onSubmit={this.handleSubmit}>
                    <input id="t" type="text" name="firstName" value={firstName} onChange={this.chahge}/>
                    <input type="text" name="secondName" value={secondName} onChange={this.chahge}/>
                    <input type="text" name="age" onChange={this.chahge}/>

                    <select name="selectOpt" id="" value={selectOpt} onChange={this.chahge}>
                        <option value="11">11</option>
                        <option value="22">22</option>
                        <option value="33">33</option>
                    </select>

                    <input type='submit' name="" id=""/>
                </form>

                <p>{this.state.name}</p>
                <p>{this.state.age}</p>
                <Clock name={this.state.name}/>
            </div>
        )
    }
}

export default Content