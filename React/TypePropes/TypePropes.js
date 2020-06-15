import React from "react";
import PropTypes from 'prop-types'

const Counter = ({counter, func, number, string}) => { // => вытянул из пропс с низу
    console.log(counter, func, number, string);
    return <h1>{`counter value is: ${counter}`}</h1>
};
Counter.propTypes= {       // валидация на тип
    counter: PropTypes.number.isRequired,
    func: PropTypes.func,
    string: PropTypes.string,
    number: PropTypes.number
};
Counter.defaultProps = {   // будут дефолтные пропсы если их не передать
    func: ()=>{},
    number : 0,
    string: ''
};

render() {
    const {counter} = this.state;
    return (
        <div>
            <button onClick={this.count}>Click</button>
            <Counter
                counter = {counter}
                // func = {()=>{}}
                // number = {1}
                // string = 'String'
            />
        </div>
    )
}

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
    func: PropTypes.func,
    string: PropTypes.string,
    number: PropTypes.number
};
Counter.defaultProps = { // присваиваются по дефолту
    counter: number
    func: ()=>{},
    number: 0,
    string: ''
};
// —————————————

// Node - для любых типов данных
Component.propTypes = {
    node: PropTypes.node,
};
// —————————————

// Element - когда в виде проспав передаем другой элемент
Component.propTypes = {
    elem: PropTypes.element,
};
// —————————————

// Instance Of - когда пропс является экземпляр класса || (new 													    Date)
Component.propTypes = {
    Instance: PropTypes.instanceOf(Constructor)
};
// —————————————

// One Of - ограничиваем свойства списком значений
Component.propTypes = {
    elem: PropTypes.oneOf([‘val-1, val-2’])
};
// —————————————

// One Of Types - пропс является одним из значений
Component.propTypes = {
    elem: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
};
// —————————————

// Array Of || Object Of - пропс: массив | obj определены значений
Component.propTypes = {
    array: PropTypes.arrayOf(PropTypes.string)
    obj: PropTypes.objectOf(PropTypes.number)
};
// —————————————

// Shape - валидация значений объекта
Component.propTypes = {
    obj: PropTypes.shape({
        color: PropTypes.string,
        font-size: PropTypes.number,
    lineHeight: PropTypes.number,
}),
};
