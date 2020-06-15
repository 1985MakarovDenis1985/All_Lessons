import React, {Fragment} from "react";

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

const style = {color: "red"}

// => возврат несколько итерируемых элементов без обертки массивом
// const Colums = () => ([
//     <td key="1">1</td>,
//     <td key="2">2</td>
// ])

// => или с помошьщью фрагментов
const Colums = () => (
    <Fragment>
        <td style={style} >1</td>
        <td >2</td>
    </Fragment>
);

class Content extends React.Component {
    render() {
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

                {/*таблица*/}
                <table>
                    <tbody>
                    <tr>
                        {/*итерируемый элимент*/}
                        <Colums/>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}