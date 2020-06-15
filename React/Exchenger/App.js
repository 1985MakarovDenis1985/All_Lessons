import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import Content from './Content'
// import Form from "./test";
import set from "@babel/runtime/helpers/esm/set";
import get from "@babel/runtime/helpers/esm/get";
import Test from "./test";

// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// import Router from "react-router/modules/Router";


ReactDOM.render(
    // null,
    // <Content/>,
    <Test text = {"Hello"}/>,
    document.getElementById('root')
);



// /// ============ form from html
// let form = document.getElementById("form")
// let obj = {};

// function getDataFromForm() {
//     let formData = new FormData(form);
//     formData.forEach((el,key)=>{
//         obj[key] = el
//     })
//     console.log(obj)
// }
// form.addEventListener("submit", (e) => {
//     e.preventDefault()
//     getDataFromForm()
// })


// ////// ================== routing ================
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: "React"
//         }
//     }
//
//     render() {
//
//         return (
//             <Router>
//                 <div className="routers" style={{"textAlign": "center"}}>
//                     <ul>
//                         <li><a href="/">Main page</a></li>
//                         <li><a href="/about">About</a></li>
//                         <li><a href="/contacts">Contacts</a></li>
//                     </ul>
//                     <Switch>
//                         <Route exact path='/' component={Home}/>
//                         <Route exact path='/contacts' component={Contacts}/>
//                     </Switch>
//                 </div>
//             </Router>
//             // Exact указывает, что строка запроса должна в точности соответствовать шаблону маршрута
//         )
//     }
// }
// export default App


////// ================== expression JSX ================
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: "React"
//         }
//     }
//
//     test(){
//         return 1111
//     }
//
//     render() {
//         let a = 5555;
//         let user = {name: "Denys", age: 34};
//         let arr = [5,6,7,8]
//         return (
//             <div style={{"textAlign": "center"}}>
//                 <h1>{this.state.text}</h1>
//                 <h2>{2+5}</h2>
//                 <div>{Math.random()}</div>
//                 <div>{this.test()}</div>
//                 <div {...user} ></div>
//                 <ul>
//                     {arr.map((el)=>{
//                         return <li key={el} style = {{"color":"green"}}>{el}</li>
//                     })}
//                 </ul>
//                 <p>&#38;</p>
//                 <p>{a}</p>
//                 <input type="text" defaultValue={"hello"} style={{border: "1px solid blue"}}/>
//             </div>
//         )
//     }
// }
//
//
// export default App


//// =========== live cycle ===================
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             text: "Hello",
//         };
//     }
//
//     // // => позволяет props присвоить в state
//     // static getDerivedStateFromProps(props, state){ // только эта функция
//     //     return {text: props.text} // передано из Content.js ReactDome
//     // }
//     componentDidMount() {  // => изменяет стейт через 3000 до рендера
//         setTimeout(()=>{
//             this.setState({text: "component did mount"})
//         }, 3000)
//     }
//
//
//     render() {
//         return (
//             <div style={{"textAlign": "center"}}>
//                 <p>{this.state.text}</p>
//             </div>
//         )
//     }
// }
//
// export default App

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


