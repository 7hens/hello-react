
import React, { Component } from 'react'
import Title from './Title'
import LikeButton from './LikeButton'
// import UserList from './UserList'
// import LessonList from './LessonList'
import CommentApp from './CommentApp'
import PercentageApp from './PercentageApp'

const extname = (filename) => {
  const matches = filename.match(/.+(\.\w+)$/i)
  return matches ? matches[1] : ''
}

export default class Header extends Component {
    render () {
        console.log(extname('.png'))
        console.log(extname('hello.jpg'))
        return (
            <div>
                <Title />
                <LikeButton likedText="赞" unlikedText="已赞" />
                {/*<UserList />*/}
                {/*<LessonList />*/}
                <PercentageApp />
                <CommentApp />
            </div>
        )
    }
}