import { START_DRAWING,STOP_DRAWING } from "../constant/features";


const featuresReducer = (state = {activatePencil: false}, action) => {
    switch(action.type) {
        case START_DRAWING:
            return {activatePencil: true}
        case STOP_DRAWING:
            return {activatePencil: false}
        default:
            return state;
    }
}

export default featuresReducer