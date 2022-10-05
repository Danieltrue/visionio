import { START_DRAWING,CHANGE_COLOR } from "../constant/features";
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