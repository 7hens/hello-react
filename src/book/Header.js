
import React, { Component } from 'react'

export default class Header extends Component {
    render () {
        return (
            <div>
                <Title />
            </div>
        )
    }
}

class Title extends Component {
    handeClickOnTitle() {
        console.log('Click on title')
    }

    render() {
        return (
            <h1 onClick={this.handeClickOnTitle}>React 小书</h1>
        )
    }
}