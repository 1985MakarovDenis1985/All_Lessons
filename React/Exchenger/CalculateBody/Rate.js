import React from "react";
import ReactDOM from 'react-dom';
import Calc from "./Calc";

class Rate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: "",
            dataRate: {},
            currencyRate: {}
        };
        this.currency = ['USD', 'CAD', 'PHP'];
        this.getRate();

    }

    getRate = () => {
        fetch("https://api.exchangeratesapi.io/latest")
            .then(data => data.json())
            .then(data => {
                this.setState({dataRate: data})
                return data
            })
            .then((data) => {
                let result = {};
                this.setState({date: data.date});

                //// => можно через for in
                for (let key in this.currency) {
                    result[this.currency[key]] = data.rates[this.currency[key]]
                }
                //// => можно через for
                // for (let i = 0; i < this.currency.length; i++) {
                //     // console.log(this.currency[i])
                //     // result[this.currency[i]] = data.rates[this.currency[i]]
                // }
                this.setState({currencyRate: result})
            })


    }

    render() {
        return (

            <div className="rate">
                <p className='titleP'>Курс валют на {this.state.date} </p>
                <div className="container_of_blocksCurrency">
                    {Object.keys(this.state.currencyRate).map((keyName, i) => (
                        <div className="block_currency" key={keyName}>
                            <div className="usd">{keyName}</div>
                            <div className="block_currency_p">{this.state.currencyRate[keyName].toFixed(2)}</div>
                            <div className="block_currency_p">за 1 EUR</div>
                        </div>
                    ))}

                </div>

                <Calc rate = {this.state.currencyRate}/>

            </div>
        )
    }
}

export default Rate