import { START_DRAWING,STOP_DRAWING } from "../constant/features";
// START DRAWING
export const startDrawing = (data) => dispatch => {
    // Start drawing
    dispatch({
        type: START_DRAWING,
        payload: data
    });
}
