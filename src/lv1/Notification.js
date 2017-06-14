import React, { Component } from 'react';

export default class Notification extends Component {
    getNotificationCount() {
        return 0
    }

    render() {
        const count = this.getNotificationCount()
        return (
            <span>{ count > 0 ? `有(${count})条` : "没有" }未读消息</span>
        )
    }
}