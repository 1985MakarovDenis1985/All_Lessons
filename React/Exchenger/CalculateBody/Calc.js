import React from "react";
import ReactDOM from 'react-dom';


class Calc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            result: 0
        }
    }

    static getDerivedStateFromProps(props, state){
        return {rate: props.rate}
    }

    calcRate =(e) => {
        e.preventDefault();
        //// => можно так:
        // let {currentCurrency, typeCurrency} = e.target;
        // console.log(currentCurrency.value, typeCurrency.value)

        //// => можно так:
        let elements = e.target.elements;
        let currentCurrency = elements["currentCurrency"].value;
        let typeCurrency = elements["typeCurrency"].value;
        this.setState({result: (currentCurrency/this.state.rate[typeCurrency]).toFixed(3)})
    };


    render() {
        return (

            <div className="calc_body">
                <p className='titleP'>Калькулятор обмена </p>
                <div className="culculate_of_currency">

                    <form action="" onSubmit={this.calcRate}>
                        <input className="value_of_Currency" type="text" name='currentCurrency'/>
                        <select name="typeCurrency" id="" className="options">
                            {
                                Object.keys(this.props.rate).map((keyName) => (
                                    <option value={keyName} key={keyName}>{keyName}</option>
                                ))
                            }
                        </select>
                        <input className='submitBtn' type="submit" defaultValue="calc"/>
                    </form>


                    <div className="result_box">
                        <p>RESULT: <br/>
                            EUR {this.state.result} </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calc