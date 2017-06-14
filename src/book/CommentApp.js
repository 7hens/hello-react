import React, { Component } from 'react'
import './CommentApp.css'

export default class CommentApp extends Component {
    constructor() {
        super()
        this.state = {
            comments: [
                {name: 'Jerry', content: 'Hello'},
                {name: 'Tomy', content: 'World'},
                {name: 'Lucy', content: 'Good'}
            ]
        }
    }

    onSubmit(comment) {
        const { comments } = this.state
        if (!comment) return
        if (!comment.name) return alert('请输入用户名')
        if (!comment.content) return alert('请输入内容')
        comments.unshift(comment)
        this.setState({
            comments: comments
        })
    }

    render() {
        const { comments } = this.state
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.onSubmit.bind(this)}/>
                <CommentList comments={comments}/>
            </div>
        )
    }
}

class CommentInput extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            content: ''
        }
    }

    onNameChange(event) {
        this.setState({
            name: event.target.value
        })
    }

    onContentChange(event) {
        this.setState({
            content: event.target.value
        })
    }

    render() {
        const { name, content } = this.state
        const { onSubmit } = this.props
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input value={name} onChange={this.onNameChange.bind(this)} />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea value={content} onChange={this.onContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={()=> onSubmit(this.state)}>发布</button>
                </div>
            </div>
        )
    }
}

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    render() {
        const { comments } = this.props
        return (
            <div>
                {comments.map((comment, i) => <Comment comment={comment} key={i} />)}
            </div>
        )
    }
}

class Comment extends Component {
    render() {
        const { comment } = this.props
        const { name, content } = comment
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span>{name}</span> : 
                </div>
                <p>{content}</p>
            </div>
        )
    }
}