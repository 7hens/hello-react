import React, { Component } from 'react'

class Dog extends Component {
    constructor() {
        super()
        this.state = {
            isRunning: false,
            isBarking: false
        }
    }

    bark() {
        this.setState({ isBarking: true})
    }

    run() {
        this.setState({ isRunning: true})
    }

    handleOnClick() {
        this.bark()
        this.run()
        setTimeout(() => {
            this.setState({ isBarking: false, isRunning: false})
        }, 20)
    }

    render() {
        return (<div onClick={this.handleOnClick.bind(this)}>DOG</div>)
    }
}
