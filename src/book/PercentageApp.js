import React, { Component } from 'react'

class Input extends Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }
    }

    onChange(event) {
        const { onChange } = this.props
        const value = event.target.value
        this.setState({
            value: value
        })
        onChange(value)
    }

    render() {
        const { value } = this.state
        return (
            <div>
                <input type='number' value={value} onChange={this.onChange.bind(this)} />
            </div>
        )
    }
}

class PercentageShower extends Component {
    render() {
        const { value } = this.props
        return (
            <div>{Math.round(value * 10000) / 100}%</div>
        )
    }
}

export default class PercentageApp extends Component {
    constructor() {
        super()
        this.state = {
            value: 0
        }
    }

    onChange(value) {
        this.setState({ value })
    }

    render() {
        const { value } = this.state
        return (
            <div>
                <Input onChange={this.onChange.bind(this)} />
                <PercentageShower value={value} />
            </div>
        )
    }
}
