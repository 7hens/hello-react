
const wrapper = document.querySelector('.wrapper')

const likeButton = document.createElement('div')
likeButton.innerHTML = `
    <button class='like-btn'>
        <span class='like-text'>点赞</span>
        <span>👍</span>
    </button>
`
wrapper.appendChild(likeButton)

const likeText = likeButton.querySelector('.like-text')
let isLiked = false

likeButton.addEventListener('click', () => {
    isLiked = !isLiked
    if (isLiked) {
        likeText.innerHTML = '取消'
    } else {
        likeText.innerHTML = '点赞'
    }
}, false)