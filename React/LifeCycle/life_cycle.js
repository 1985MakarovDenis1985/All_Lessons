import {BrowserRouter as Router} from "react-router-dom";

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            time: 1
        }
    }

    componentDidMount() {
        this.TimerId = setInterval(() => {
            return  this.setState({
                    date: new Date(),
                    time: new Date().getSeconds()
                }
            )
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(snapshot)
    }

    componentWillUnmount() {
        clearInterval(this.TimerId)
    }

    // tick = () => {
    //     this.setState({date : new Date()})
    // }

    render() {
        return (
            <div>
                {this.state.date.toTimeString()}
            </div>
        )
    }
}

export default Test