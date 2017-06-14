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
            <input type='number' value={value} onChange={this.onChange.bind(this)} style={styles.input}/>
        )
    }
}

class PercentageShower extends Component {
    render() {
        const { value } = this.props
        return (
            <span style={styles.shower}>{Math.round(value * 10000) / 100}%</span>
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
            <span>
                <Input onChange={this.onChange.bind(this)} />
                <PercentageShower value={value} />
            </span>
        )
    }
}

const styles = {
    input: {
        marginRight: 8,
        marginLeft: 16,
        width: 64
    },
    shower: {
        marginRight: 16
    }
}