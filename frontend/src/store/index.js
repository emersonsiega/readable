import { createStore, compose } from 'redux'

import middleware from './middleware'
import reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers, 
    composeEnhancers( middleware )
)

export default store