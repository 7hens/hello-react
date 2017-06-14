import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'
import MainApp from './book/MainApp'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(<MainApp />, document.getElementById('root'));
registerServiceWorker();
