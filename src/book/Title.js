import React, { Component } from 'react'

export default class Title extends Component {
    handeClickOnTitle() {
        console.log('Click on title')
    }

    render() {
        return (
            <h1 onClick={this.handeClickOnTitle}>React 小书</h1>
        )
    }
}