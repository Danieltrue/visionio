import { START_DRAWING,CHANGE_COLOR } from "../constant/features";


export const featuresReducer = (state = {activatePencil: false}, action) => {
    switch(action.type) {
        case START_DRAWING:
            return {activatePencil: action.payload}
        default:
            return state;
    }
}

export const changeColorReducer = (state = {color: '#000000'}, action) =>  {
    switch(action.type) {
        case CHANGE_COLOR:
            return {color: action.payload}
        default:
            return state;
    }
}
