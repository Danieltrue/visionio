import { START_DRAWING,STOP_DRAWING } from "../constant/features";


const featuresReducer = (state = {activatePencil: false}, action) => {
    switch(action.type) {
        case START_DRAWING:
            return {activatePencil: action.payload}
        default:
            return state;
    }
}

export default featuresReducer