import React, { Component } from 'react'
import Header from './Header'
import LikeButton from './LikeButton'
import UserList from './UserList'
import LessonList from './LessonList'
import Notification from './Notification';
import House from './House';
import CommentApp from './CommentApp'
import PercentageApp from './PercentageApp'

const extname = (filename) => {
  const matches = filename.match(/.+(\.\w+)$/i)
  return matches ? matches[1] : ''
}

export default class MainApp extends Component {
    render () {
        console.log(extname('.png'))
        console.log(extname('hello.jpg'))
        return (
            <div style={{textAlign: 'center'}}>
                <Header />
                <LikeButton likedText="赞" unlikedText="已赞" />
                <Notification />
                <House />
                <PercentageApp />
                <UserList />
                <LessonList />
                <CommentApp />
            </div>
        )
    }
}