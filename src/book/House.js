import React, { Component } from 'react';

export default class House extends Component {
    render() {
        return (
            <div className="house" style={styles.house}>
                <Room />
                <Bathroom />
            </div>
        )
    }
}

class Room extends Component {
    render() {
        return (
            <div className="room" style={styles.room}>
                <Man />
                <Dog />
                <Dog />
            </div>
        )
    }
}

class Bathroom extends Component {
    render() {
        return (
            <div className="bathroom" style={styles.bathroom}>bathroom</div>
        )
    }
}

class Man extends Component {
    render() {
        return (
            <div className="man" style={styles.man}>man</div>
        )
    }
}

class Dog extends Component {
    render() {
        return (
            <div className="dog" style={styles.dog}>dog</div>
        )
    }
}

const styles = {
    house: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 8,
        display: 'inline-block'
    },
    room: {
        borderRadius: '50%',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'blueviolet',
        padding: 16,
        textAlign: 'center'
    },
    bathroom : {
        padding: 8
    },
    man: {
        fontWeight: 'bolder',
        fontSize: 24,
        display: 'inline-block',
        margin: 4
    },
    dog: {
        display: 'inline-block',
        margin: 3
    }
}