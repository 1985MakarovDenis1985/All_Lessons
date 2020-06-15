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
            textArea: '',
            selectOpt: '1'
        };
        this.chahge = this.chahge.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    chahge = (e) => {
        const {name, value, type} = e.target;
        this.setState({[name]: value});
    };

    handleSubmit(e) {
        e.preventDefault();
        let obj = {
            firstName: '_',
            secondName: '-'
        }
        for (let key in obj) {  //// присваисаем обьету только те свойства из стейт которые имеет объект
            console.log(key);
            obj[key] = this.state[key]
        }
        console.log(obj)
    }

    render() {
        const {firstName, secondName, textArea, selectOpt} = this.state;
        return (
            <div>

                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" name="firstName" value={firstName} onChange={this.chahge}/>
                    <input type="text" name="secondName" value={secondName} onChange={this.chahge}/>
                    <input type="text" name="age" onChange={this.chahge}/>

                    <textarea name="textArea" id="" cols="5" rows="2" value={textArea} onChange={this.chahge}></textarea>

                    <select name="selectOpt" id="" value={selectOpt} onChange={this.chahge}>
                        <option value="1">11</option>
                        <option value="2">22</option>
                        <option value="3">33</option>
                    </select>

                    <input type='submit' name="" id=""/>
                </form>

                <Clock name={this.state.name}/>
            </div>
        )
    }
}

export default Content
// https://api.exchangeratesapi.io/latest
