// // let form = document.getElementById("form");
// //
// //
// form.onsubmit = (e) => {
//     e.preventDefault()
//     let formData = new FormData(form) //// => будет передавать все данные с формы
//     let obj = {}
//     formData.forEach((el, key) => { // el => это значение из формы
//         if (obj.hasOwnProperty(key)){  // => если надо записть в obj только те значения которые которые содержит обеъкт
//         obj[key] = el               // ключи записаны в name в формме
//        }
//     })
// }
//
import React from 'react';
import ReactDOM from 'react-dom';

// onChange = ({target: {value}}) => {    // ========= диструктуризация для формы
//     this.setState({
//         activeTab: value
//     })
// }

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            secondName: "",
            radio: "",
            address: {
                city: '',
                state: '',
                country: '',
            },
            other: {
                age: '',
                job: ''
            }
        };

        this.submitClick = this.submitClick.bind(this)
    }

    submitClick(e) {
        e.preventDefault();
        // let obj = {};
        console.log(this.state)
    }

    changeValue = (e) => {
        let {name, type, value, checked} = e.target;
        this.setState({[name]: value});
    };
    changeValueX = (e) => {
        let {name, type, value, checked} = e.target;
        let addAddress = Object.assign({}, this.state.address);
        addAddress[name] = value;
        this.setState({address: addAddress})
    };
    changeValueY = (e) => {
        let {name, type, value, checked} = e.target;
        let addOther = Object.assign({}, this.state.other);
        addOther[name] = value;
        this.setState({other: addOther})
    };

    render() {
        let {firstName, secondName} = this.state;

        return (
            <div>
                <form action="" id="f" onSubmit={this.submitClick}>
                    <div >
                        <input name="firstName" value={firstName} type="text" onChange={this.changeValue}/>
                        <input name="secondName" value={secondName} type="text" onChange={this.changeValue}/>
                    </div>
                    <div>
                        <input name="city" type="text" onChange={this.changeValueX}/>
                        <input name="state" type="text" onChange={this.changeValueX}/>
                        <input name="country" type="text" onChange={this.changeValueX}/>
                    </div>
                    <div>
                        <input name="age" type="text" onChange={this.changeValueY}/>
                        <input name="job" type="text" onChange={this.changeValueY}/>
                    </div>

                    <div>
                        <input name="radio" type="radio" value="ON" onChange={this.changeValue}/>
                        <input name="radio" type="radio" value="OFF" onChange={this.changeValue}/>
                        <input name="radio" type="radio" value="MEDIUM" onChange={this.changeValue}/>
                    </div>

                    <div>
                        {/*<input name="check_1" type="checkbox" value="one" onChange={this.changeValue}/>*/}
                        {/*<input name="check_2" type="checkbox" value="two" onChange={this.changeValue}/>*/}
                        {/*<input name="check_3" type="checkbox" value="three" onChange={this.changeValue}/>*/}
                    </div>

                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default Form