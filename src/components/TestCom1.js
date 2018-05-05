import React from "react";

class TestCom1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            visible: true
        }
    }
    handleClick = () => {
        this.setState({ name: this.state.name += "1", visible: !this.state.visible })
        this.props.aa();
    }
    render() {
        return <div>
            {this.state.visible && <h1>Hello, {this.props.name}</h1>}
            <h1 onClick={this.handleClick}>Hello, {this.state.name}</h1>
        </div>
    }
}

export default TestCom1