import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import PropTypes from 'prop-types';

import ReactCSSTransitionGroupe from "react-addons-css-transition-group"

JS:

    class CSSAnimationReact extends React.Component {


        render() {
            return (
                <ReactCSSTransitionGroupe

                    component="div"
                    className="box"
                    transitionName="slide"

                    // количество милисекунд до добавления класса
                    transitionEnterTimeout={500}

                    // количество милисекунд при удалении из DOM
                    transitionLeaveTimeout={500}

                    // для удаления анимации || изначально true
                    transitionEnter = {false}
                    transitionLeave = {false}

                    // определяют изначальную анимацию
                    transitionAppear = {true}
                    transitionAppearTimeout = {500}
                >
                    {arr.map((el) => (
                        <h3 key={el + 1}>{el}</h3>
                    ))}

                </ReactCSSTransitionGroupe>
//
            )
        }

    }

// CSS:
//     .slide-enter {
//     //начальная анимация
// }
// .slide-enter .slide-enter-active {
//     //анимация после добавления в ДОМ
//     transition: .5s;
// }
// .slide-leave {
//     //начальная анимация
// }
// .slide-leave .slide-leave-active {
//     //анимация после удаления из ДОМ
//     transition: .5s;
// }
// .slide-appear{
//     //начальная анимация
// }
// .slide-appear .slide-appear-active{
//     //анимация после добавления в ДОМ
// }
//
// Более лучшая библиотека React Moution далее(React-animations, React-reveal)
