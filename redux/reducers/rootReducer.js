import {combineReducers} from 'redux';
import {featuresReducer,changeColorReducer,changePencilSizeReducer,changePencilCapReducer} from './feature.reducer';


const rootReducer = combineReducers({
    featuresReducer: featuresReducer,
    changeColorReducer: changeColorReducer,
    changePencilSizeReducer: changePencilSizeReducer,
    changePencilCapReducer: changePencilCapReducer
});

export default rootReducer;