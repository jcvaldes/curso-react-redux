import React, {Component} from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>{this.props.value}</h1>
        );
    }
}