// import React from 'react';
// import ReactDOM from 'react-dom';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// // ----------------------------------
// import Clock from "./Clock";
//


//
// import React from "react";
//
// class Content extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: "Denis",
//             secondName: '',
//             selectOpt: '7',
//             selectOpt2: [],
//             checkbox: false,
//             radio: '1'
//         };
//         this.chahge = this.chahge.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this)
//         // this.getDate = this.getDate.bind(this)
//
//     }
//
//     chahge = (e) => {
//         let {name, value, type, selectedOptions, checked } = e.target; //// => selectedOptions - массив выбранных опций
//         if (type === 'select-multiple'){ /// => проверяем тип
//             value = [...selectedOptions].map(el => el.value) //// => перебираем все выбранные опции в selecte
//         }
//         if (type === 'checkbox'){
//             value = checked
//         }
//         this.setState({[name]: value});
//     };
// // или так
//        onChange = ({target: {value}}) => {
//            this.setState({
//                 activeTab: value
//             })
//           }
//
//     handleSubmit(e) {
//         e.preventDefault();
//         let obj = {}
//         Object.assign(obj, this.state)
//         console.log(obj)
//         this.getDate(obj)
//     }
//
//     getDate(obj) {
//         return fetch("http://localhost:3000/users", {
//             method: "post",
//             headers: {
//                 'content-type' : 'application/json'
//             }                      ,
//             body:JSON.stringify(obj)
//         })
//     }
//     render() {
//         // для Label вместо for использовать htmlFor
//         const {firstName, secondName, selectOpt, selectOpt2, checkbox, radio} = this.state;
//         return (
//             <div>
//
//                 {/*<form action="" onSubmit={this.handleSubmit}>*/}
//                 {/*    <input id="t" type="text" name="firstName" value={firstName} onChange={this.chahge}/>*/}
//                 {/*    <input type="text" name="secondName" value={secondName} onChange={this.chahge}/>*/}
//                 {/*    <input type="text" name="age" onChange={this.chahge}/>*/}
//
//                 {/*    <select name="selectOpt" id="" value={selectOpt} onChange={this.chahge}>*/}
//                 {/*        <option value="11">11</option>*/}
//                 {/*        <option value="33">33</option>*/}
//                 {/*    </select>*/}
//
//                 {/*    <select multiple={true} name="selectOpt2" id="" value={selectOpt2} onChange={this.chahge}>*/}
//                 {/*        <option value="1">1</option>*/}
//                 {/*        <option value="2">2</option>*/}
//                 {/*        <option value="3">3</option>*/}
//                 {/*        <option value="4">4</option>*/}
//                 {/*    </select>*/}
//
//                 {/*    <input type="checkbox" name='checkbox' checked={checkbox}  onChange={this.chahge}/>*/}
//
//                 {/*    <input type="radio" name='radio' value='1' checked={radio === '1'}  onChange={this.chahge}/>*/}
//                 {/*    <input type="radio" name='radio' value='2' checked={radio === '2'}  onChange={this.chahge}/>*/}
//                 {/*    <input type="radio" name='radio' value='33' checked={radio === '3'}  onChange={this.chahge}/>*/}
//
//
//                 {/*    <input type='submit' name="" id=""/>*/}
//                 {/*</form>*/}
//
//                 {/*<p>{this.state.name}</p>*/}
//                 {/*<p>{this.state.age}</p>*/}
//                 {/*<Clock name={this.state.name}/>*/}
//             </div>
//         )
//     }
//
//     //// -------- отслеживает все изменения -----------
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log(this.state)
//     }
// }
//
// export default Content
// // https://api.exchangeratesapi.io/latest
// // http://localhost:3000/posts


// class Content extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: "Denis",
//             secondName: '',
//             selectOpt: '7'
//         };
//         this.chahge = this.chahge.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//
//     chahge = (e) => {
//         const {name, value, type} = e.target;
//         this.setState({[name]: value});
//     };
//
//     handleSubmit(e) {
//         e.preventDefault();
//         // console.log(this.state)
//         let obj = {}
//         Object.assign(obj, this.state)
//         console.log(obj)
//     }
//
//
//     render() {
//         const {firstName, secondName, textArea, selectOpt} = this.state;
//         return (
//             <div>
//
//                 <form action="" onSubmit={this.handleSubmit}>
//                     <input id="t" type="text" name="firstName" value={firstName} onChange={this.chahge}/>
//                     <input type="text" name="secondName" value={secondName} onChange={this.chahge}/>
//                     <input type="text" name="age" onChange={this.chahge}/>
//
//                     <select name="selectOpt" id="" value={selectOpt} onChange={this.chahge}>
//                         <option value="11">11</option>
//                         <option value="22">22</option>
//                         <option value="33">33</option>
//                     </select>
//
//                     <input type='submit' name="" id=""/>
//                 </form>
//
//                 <p>{this.state.name}</p>
//                 <p>{this.state.age}</p>
//                 <Clock name={this.state.name}/>
//             </div>
//         )
//     }
// }
//
// export default Content
// // https://api.exchangeratesapi.io/latest


/////// ==================  lesson 2 ==================== ///////


//// =============================== lesson 2
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: "",
//             text2: 7777
//         };
//     }
//
//     myInput = (e) => {
//         console.log(e.target.name, e.target.value)
//         // this.setState({text: e.target.value})
//     };
//     submitForm = (e) => {
//         e.preventDefault()
//         console.log(e)
//     };
//     render() {
//         let a = "";
//         (this.state.text)? a = <p>{this.state.text}</p> : a = "";
//
//         return (
//             <div style={{"textAlign": "center"}}>
//                 {/*<form onSubmit={this.submitForm} action="">*/}
//                     <input onChange={this.myInput} type="text"  name={"text"} style={{"border": "1px solid blue"}}/>
//                     <input onChange={this.myInput} type="number" name = "age"/>
//                     {a}
//                     <input type="submit"/>
//                     <p>{this.state.age}</p>
//                 {/*</form>*/}
//             </div>
//         )
//     }
// }
//
// export default App