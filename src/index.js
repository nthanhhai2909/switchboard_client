import React , {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import App from './containers/App'
import thunk from 'redux-thunk'
const middleware = [ thunk ];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

// let store = createStore(
//     reducers,
//     applyMiddleware(...middleware)
// )
render(
    <Provider >
        <App/>
    </Provider>, document.getElementById('root')
)