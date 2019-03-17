//Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
//CSS
import './index.css'
//Components
import App from './components/App'
//ServiceWorker
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
