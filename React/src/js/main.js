import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import set from "@babel/runtime/helpers/esm/set";
import get from "@babel/runtime/helpers/esm/get";


//
// ReactDOM.render(
//     <App
//         text = "Yeeeeee"
//     />,
//     document.getElementById('root')
// );


//// ==================  если App является классом

//// ------------------- можно так:
// ReactDOM.render(
//     App.render(),      ---------
//     document.getElementById('root')
// );
//// тогда компонент :   class App extends React.Component {
////                           static render() { //// => через class перед рендер ставить static
////                                 return (
////                                    );
////                                 }
////                              }


//// -------------------- либо так:

// ReactDOM.render(
//     <App/>, //
//     document.getElementById('root')
// );
//// тогда компонент :   class App extends React.Component {
////                            render() { //// => без static
////                                 return (
////                                    );
////                                 }
////                              }


//// -------------------- либо когда компоненты функции:

// ReactDOM.render(
//     App(), //
//     document.getElementById('root')
// );
//
// function App() {
//     return (
//     );
// }
//
// export default App;