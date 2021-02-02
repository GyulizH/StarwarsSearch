import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from './rootReducer'
import apiMiddleWare from './middleWare'

// export const store = createStore(rootReducer, applyMiddleware(apiMiddleWare))

export const store = createStore(rootReducer, applyMiddleware(thunk))
