import {combineReducers} from 'redux';
import featuresReducer from './feature.reducer';


const rootReducer = combineReducers({
    featuresReducer: featuresReducer
});

export default rootReducer;