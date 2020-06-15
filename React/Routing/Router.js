import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";

import Title from "./Routes/Title";
import About from "./Routes/About";
import Contacts from "./Routes/Contacts";
import Other from "./Routes/Other";


class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Router>
                <div>
                    <nav>

                        {/* ---- NavLink => как линк только можно сразу прописать активный класс ----*/}
                        <nav>
                            {/* ---- можно так прописать активную ссылку ----->  <NavLink exact to="/" activeStyle={{color:"green", fontWeight:"bold"}}>Главная</NavLink>*/}
                            <NavLink exact to="/title" activeClassName="active">Главная</NavLink><br/>
                            <NavLink to="/about_us" activeClassName="active">О сайте</NavLink><br/>
                            <NavLink to="/contacts" activeClassName="active">Контакты</NavLink>
                        </nav>

                        {/* ---- LINK => ссылка без перезагрузки страницы ---- */}
                        {/*<Link to='/title'>title</Link><br/>*/}
                        {/*<Link to='/about_us'>about</Link><br/>*/}
                        {/*<Link to='/contacts'>contacts</Link>*/}

                        {/* ----- Обычная ссылка ---- */}
                        {/*<li><a href="/title">title</a></li>*/}
                        {/*<li><a href="/about_us">about</a></li>*/}
                        {/*<li><a href="/contacts">contacts</a></li>*/}
                    </nav>

                    {/* ----- Проверка пути и реализация ----- */}
                    <Switch>
                        <Route exact path='/title' component={Title}></Route>
                        <Route exact path='/about_us' component={About}></Route>
                        <Route exact path='/contacts' component={Contacts}></Route>
                        {/*В случае левого адреса выбивакт страницу Other*/}
                        <Route component={Other}></Route>
                    </Switch>
                </div>
            </Router>

        )
    }
}

export default Test
