import React, { Component } from 'react'

const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]

class Lesson extends Component {
    onClick() {
        const { lesson, index } = this.props
        console.log(`${index} - ${lesson.title}`)
    }

    render() {
        const { lesson } = this.props
        return (
            <div onClick={this.onClick.bind(this)}>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
            </div>
        )
    }
}

export default class LessonsList extends Component {
    render() {
        return (
            <div>
                {lessons.map((lesson, i) => <Lesson key={i} lesson={lesson} index={i}/>)}
            </div>
        )
    }
}
