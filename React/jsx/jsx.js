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


//// ----------------


//     // // => позволяет props присвоить в state
//     // static getDerivedStateFromProps(props, state){ // только эта функция
//     //     return {text: props.text} // передано из Content.js ReactDome
//     // }