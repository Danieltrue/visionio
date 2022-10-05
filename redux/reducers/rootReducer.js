import {combineReducers} from 'redux';
import {featuresReducer,changeColorReducer} from './feature.reducer';


const rootReducer = combineReducers({
    featuresReducer: featuresReducer,
    changeColorReducer: changeColorReducer
});

export default rootReducer;