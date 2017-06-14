import React, { Component } from 'react'

export default class LikeButton extends Component {
    constructor() {
        super()
        this.state = { isLiked: false }
    }

    handleClickOnLickButton() {
        console.log(this.state.isLiked)
        this.setState({
            isLiked: !this.state.isLiked
        })
        console.log(this.state.isLiked)
    }

    render() {
        const likedText = this.props.likedText || '点赞'
        const unlikedText = this.props.unlikedText || '取消'
        return (
            <button onClick={this.handleClickOnLickButton.bind(this)}>
                { this.state.isLiked ? unlikedText : likedText } 👍
            </button>
        )
    }
}