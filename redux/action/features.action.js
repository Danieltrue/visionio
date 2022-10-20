import {
  START_DRAWING,
  CHANGE_COLOR,
  CHANGE_PENCIL_SIZE,
  CHANGE_PENCIL_CAP,
  ACTIVATE_ERASER,
  ACTIVATE_MOBILE_RESPONSIVE,
  ACTIVATE_MOBILE_NAV,
} from "../constant/features";
// START DRAWING
export const startDrawing = (data) => (dispatch) => {
  // Start drawing
  dispatch({
    type: START_DRAWING,
    payload: data,
  });
};

//CHANGE COLOR
export const changeColor = (color) => (dispatch) => {
  dispatch({
    type: CHANGE_COLOR,
    payload: color,
  });
};

//CHANGE PENCIL SIZE
export const changePencilSize = (size) => (dispatch) => {
  dispatch({
    type: CHANGE_PENCIL_SIZE,
    payload: size,
  });
};

//CHANGE PENCIL CAP
export const changePencilCap = (linecap) => (dispatch) => {
  dispatch({
    type: CHANGE_PENCIL_CAP,
    payload: linecap,
  });
};

//ACTIVATED ERASER
export const activateEraser = (data) => (dispatch) => {
  dispatch({
    type: ACTIVATE_ERASER,
    payload: data,
  });
};

//RESONSIVE
export const responsiveSize = (data) => (dispatch) => {
  dispatch({
    type: ACTIVATE_MOBILE_RESPONSIVE,
    payload: data,
  });
};

//
export const activateMobileNav = (data) => (dispatch) => {
  dispatch({
    type: ACTIVATE_MOBILE_NAV,
    payload: data,
  });
};
