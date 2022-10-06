import { START_DRAWING,CHANGE_COLOR, CHANGE_PENCIL_SIZE, CHANGE_PENCIL_CAP} from "../constant/features";
// START DRAWING
export const startDrawing = (data) => dispatch => {
    // Start drawing
    dispatch({
        type: START_DRAWING,
        payload: data
    });
}

//CHANGE COLOR
export const changeColor = (color) => dispatch => {
    dispatch({
        type: CHANGE_COLOR,
        payload: color
    })
}

//CHANGE PENCIL SIZE
export const changePencilSize = (size) => dispatch => {
    dispatch({
        type: CHANGE_PENCIL_SIZE,
        payload: size
    })
}

//CHANGE PENCIL CAP
export const changePencilCap = (linecap) => dispatch => {
    dispatch({
        type: CHANGE_PENCIL_CAP,
        payload: linecap
    })
}