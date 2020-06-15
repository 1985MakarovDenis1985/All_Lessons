
// Context - для проброса параметров в нижние уровни не затрагивая промежуточные
const TitleContext = React.createContext(); // создаем контекст

const LeaveOne = () => <LeaveTwo/>;
const LeaveTwo = () => <LeaveThree/>;

// const LeaveThree = () =>(  // простое применение
//     // оборачиваем для потребления контекста
//     <TitleContext.Consumer>
//         { title => <h1> {title} </h1> }
//     </TitleContext.Consumer>
// )
const LeaveThree = () => (
    // оборачиваем для потребления контекста
    <TitleContext.Consumer>
        {({title, subtitle, click}) => ( // деструктурировали title, subtitleб click
            <Fragment>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <button onClick={click}></button>
            </Fragment>
        )}
    </TitleContext.Consumer>
)

class Content extends React.Component {

    render() {
        return (
            // Делаем обертку с помощью провайдер куда передаем значение

            // <TitleContext.Provider value = "Hello Word"> // простая передача
            <TitleContext.Provider value = {{title: "Hello Word", subTitle: "subtitle", click: () => console.log("smt metod")}}>
                <LeaveOne/>
            </TitleContext.Provider>

        )
    }
}

export default Content

