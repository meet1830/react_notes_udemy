// class components are older way of creating components before hooks
// when creating a component using class have to extend React.component class
// second difference is in how we add a template. in func based we just return the template but in class we use render method. render method returns the template
// third difference is in accepting props, in func based accepting as arguments. in class we access the props by this.props.keyword
// 4th diff working with states in func based we use hooks but in class based we define a constructor, set the initial state using this.state which is an object of state properties. update the state by saying this.setstate and passing in a new state object

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        );
    }
}