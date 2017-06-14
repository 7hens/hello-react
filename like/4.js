
class Component {
    constructor(props = {}) {
        this.props = props
    }

    setState(state) {
        const oldElement = this.element
        this.state = state
        this._renderDOM()
        if (this.onStateChange) this.onStateChange(oldElement, this.element)
    }

    _renderDOM() {
        this.element = document.createElement('div')
        this.element.innerHTML = this.render()
        if (this.onClick) {
            this.element.addEventListener('click', this.onClick.bind(this), false)
        }
    }

    mount(wrapper) {
        this._renderDOM()
        wrapper.appendChild(this.element)
        this.onStateChange = (oldElement, newElement) => {
            wrapper.insertBefore(newElement, oldElement)
            wrapper.removeChild(oldElement)
        }
    }
}

class LikeButton extends Component {
    constructor(props) {
        super(props)
        this.state = { isLiked: false }
    }
    
    onClick() {
        this.setState({
            isLiked: !this.state.isLiked
        })
    }

    render() {
        return `
            <button class='like-btn' style="background-color: ${this.props.bgColor}">
                <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
                <span>👍</span>
            </button>
        `
    }
}

const wrapper = document.querySelector('.wrapper')
const likeButton = new LikeButton({bgColor: 'red'})
likeButton.mount(wrapper)