import { START_DRAWING,STOP_DRAWING } from "../constant/features";
// START DRAWING
export const startDrawing = () => dispatch => {
    // Start drawing
    dispatch({
        type: START_DRAWING,
    });
}
// STOP DRAWING
export const stopDrawing = () => dispatch => {
    // Stop drawing
    dispatch({
        type: STOP_DRAWING,
    })
}