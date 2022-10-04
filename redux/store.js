import {applyMiddleware,compose} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import thunk from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import rootReducer from './reducers/rootReducer'

const middleware = [thunk];

const makeStore = () => configureStore({reducer: {
    rootReducer: rootReducer
}});
// compose(applyMiddleware(...middleware))
const store = createWrapper(makeStore)

export default store