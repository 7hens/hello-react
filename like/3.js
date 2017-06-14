
const createDOMFromString = (domString) => {
    const div = document.createElement('div')
    div.innerHTML = domString
    return div
}

class LikeButton {
    constructor() {
        this.state = { isLiked: false }
    }

    setState(state) {
        const oldElement = this.element
        this.state = state
        this.element = this.render()
        if (this.onStateChange) this.onStateChange(oldElement, this.element)
    }

    changeLikeText() {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render() {
        this.element = createDOMFromString(`
                    <button class='like-btn'>
                        <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
                        <span>👍</span>
                    </button>
                `)
        this.element.addEventListener('click', this.changeLikeText.bind(this), false)
        return this.element
    }
}

const wrapper = document.querySelector('.wrapper')
const likeButton = new LikeButton()
wrapper.appendChild(likeButton.render())
likeButton.onStateChange = (oldElement, newElement) => {
    wrapper.insertBefore(newElement, oldElement)
    wrapper.removeChild(oldElement)
}