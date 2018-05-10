import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'redux-bundler-react'
import { compose, combineReducers, applyMiddleware } from 'redux'
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux'
import { createHashHistory } from 'history'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import getStore from './bundles'

const history = createHashHistory()
const middleware = routerMiddleware(history)
const store = getStore(compose(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(middleware)
))

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'))

registerServiceWorker()
