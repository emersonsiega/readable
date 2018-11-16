import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const logger = createLogger({
    duration: true
})

const middleware = applyMiddleware(
    thunk,
    logger,
)

export default middleware
