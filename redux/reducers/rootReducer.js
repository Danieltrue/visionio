import {combineReducers} from 'redux';
import {featuresReducer,changeColorReducer,changePencilSizeReducer,changePencilCapReducer,activateEraserReducer} from './feature.reducer';


const rootReducer = combineReducers({
    featuresReducer: featuresReducer,
    changeColorReducer: changeColorReducer,
    changePencilSizeReducer: changePencilSizeReducer,
    changePencilCapReducer: changePencilCapReducer,
    activateEraserReducer: activateEraserReducer
});

export default rootReducer;