import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Rect",
            subTitle: "Navigation",
            show: "red"
        }
    }

    // showNav() {
    //     this.setState({show: "hide"})     // => тогда присвоение:
    // }                                     // onClick={this.showNav.bind(this)}
    showNav = () => {                        // => тогда присвоение:
        this.setState({show: "hide"})  // onClick={this.showNav}
    };

    render() {
        let nav = this.props.nav;
        return (
            <nav>
                <button type="botton" onClick={this.showNav} style={{"border": "1px solid blue"}}>Show menu
                </button>
                <h3>{this.state.title}</h3>
                <h5>{this.state.subTitle}</h5>
                <p>{this.state.show}</p>
                <ul>
                    {/*{Object.keys(nav).map((el) => {*/}
                    {/*    return <li key={el}>*/}
                    {/*        <a href={"{nav[el]}"}>*/}
                    {/*            {el}*/}
                    {/*        </a>*/}
                    {/*    </li>*/}
                    {/*})}*/}
                </ul>
            </nav>
        )
    }
}

export default Nav
//
// class Nav extends React.Component {
//     render() {
//         let nav = this.props.nav;
//
//         return (
//             <nav>
//                 <ul>
//                     {Object.keys(nav).map((elem) => {
//                         return <li key={elem}>
//                             <a href={"{nav[elem]}"}>
//                                 {elem}
//                             </a>
//
//                         </li>
//                     })}
//                 </ul>
//             </nav>
//         )
//     }
// }
//
// export default Nav