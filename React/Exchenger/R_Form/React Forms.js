import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// ---------------------------------
import Clock from "./Clock";


class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "Denis",
            secondName: '',
            textArea:'',
            selectOpt: ''
        };
        this.chahge = this.chahge.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    chahge = (e) => {
        const {name, value, type} = e.target;  // вытягиваю значения из всех форм
        this.setState({[name]: value})   // присваиваю в стейт


    };

    handleSubmit(e){
        e.preventDefault();
        console.log(this.state)
        //// => присваиваем только ье свойства объекту из стейт которые имеет сам объект (другие пропускаем)
        let obj = {
            firstName: '_',
            secondName: '-'
        }
        for (let key in obj) {  //// присваисаем обьету только те свойства из стейт которые имеет объект
            obj[key] = this.state[key]
        }
        console.log(obj)
    }

    render() {
        return (
            <div>

                <form action="" onSubmit={this.handleSubmit}>
                    <input type="text" name="firstName" onChange={this.chahge} />
                    <input type="text" name="secondName" onChange={this.chahge} />
                    <input type="text" name="age" onChange={this.chahge} />

                    <textarea name="textArea" id="" cols="5" rows="2" onChange={this.chahge} ></textarea>

                    <select name="selectOpt" id="" onChange={this.chahge} >
                        <option value="1">11</option>
                        <option value="2">22</option>
                        <option value="3">33</option>
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

export default Forms
// https://api.exchangeratesapi.io/latest