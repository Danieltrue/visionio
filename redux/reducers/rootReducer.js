import {combineReducers} from 'redux';
import {featuresReducer,changeColorReducer,changePencilSizeReducer} from './feature.reducer';


const rootReducer = combineReducers({
    featuresReducer: featuresReducer,
    changeColorReducer: changeColorReducer,
    changePencilSizeReducer: changePencilSizeReducer
});

export default rootReducer;