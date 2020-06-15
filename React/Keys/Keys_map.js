import React from "react";

const TAB_BTN = [
    {
        dataName: 1,
        title: 'Tab-1'
    },
    {
        dataName: 2,
        title: 'Tab-2'
    },
    {
        dataName: 3,
        title: 'Tab-3'
    }
]

const OPTIONS = [
    {
        id: 1,
        value: 'front-end',
        title: 'front-end'
    },
    {
        id: 2,
        value: 'back-end',
        title: 'back-end'
    }
]


class Content extends React.Component {

    handelClick = (e) => {
        this.setState({
            activeTab: e.target.dataset.name
        })
    }

    render() {


        // возврат нескольких итерируемых объектов
        const Colums = () => ([
            <td key="1">1</td>,
            <td key="2">2</td>
        ])

        return (
            <div>
                {TAB_BTN.map(({dataName, title}) => ( // изьяли dataName, title из объектов TAB_BTN
                    <button
                        key={dataName}
                        data-name = {dataName}
                        onClick={this.handelClick}
                    >{title}</button>
                ))}

                <ul>
                    {people.map((el, i)=>(
                        <li key={i}>{el}</li>
                    ))}
                </ul>

                <select name="" id="">
                    {OPTIONS.map(({id, value, title}) => (
                        <options key={id} value={value}>{title}</options>
                    ))}
                </select>
            </div>
        )
    }
}