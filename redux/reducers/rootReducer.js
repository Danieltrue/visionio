import { combineReducers } from "redux";
import {
  featuresReducer,
  reponsiveSizeReducer,
  changeColorReducer,
  changePencilSizeReducer,
  changePencilCapReducer,
  activateEraserReducer,
  activateMobileNavReducer,
} from "./feature.reducer";

const rootReducer = combineReducers({
  featuresReducer: featuresReducer,
  changeColorReducer: changeColorReducer,
  changePencilSizeReducer: changePencilSizeReducer,
  changePencilCapReducer: changePencilCapReducer,
  activateEraserReducer: activateEraserReducer,
  reponsiveSizeReducer: reponsiveSizeReducer,
  activateMobileNavReducer: activateMobileNavReducer,
});

export default rootReducer;
