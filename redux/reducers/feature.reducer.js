import {
  START_DRAWING,
  CHANGE_COLOR,
  CHANGE_PENCIL_SIZE,
  CHANGE_PENCIL_CAP,
  ACTIVATE_ERASER,
  ACTIVATE_MOBILE_RESPONSIVE,
  ACTIVATE_MOBILE_NAV,
} from "../constant/features";

export const featuresReducer = (state = { activatePencil: false }, action) => {
  switch (action.type) {
    case START_DRAWING:
      return { activatePencil: action.payload };
    default:
      return state;
  }
};

export const changeColorReducer = (state = { color: "#000000" }, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return { color: action.payload };
    default:
      return state;
  }
};

export const changePencilSizeReducer = (state = { size: 2 }, action) => {
  switch (action.type) {
    case CHANGE_PENCIL_SIZE:
      return { size: action.payload };
    default:
      return state;
  }
};

export const changePencilCapReducer = (
  state = { linecap: "round" },
  action
) => {
  switch (action.type) {
    case CHANGE_PENCIL_CAP:
      return { linecap: action.payload };
    default:
      return state;
  }
};

export const activateEraserReducer = (
  state = { activatedEraser: false },
  action
) => {
  switch (action.type) {
    case ACTIVATE_ERASER:
      return { activatedEraser: action.payload };
    default:
      return state;
  }
};

export const reponsiveSizeReducer = (state = { responsive: 1140 }, action) => {
  switch (action.type) {
    case ACTIVATE_MOBILE_RESPONSIVE:
      return { responsive: action.payload };
    default:
      return state;
  }
};

export const activateMobileNavReducer = (
  state = { activatedMobileNav: false },
  action
) => {
  switch (action.type) {
    case ACTIVATE_MOBILE_NAV:
      return { activatedMobileNav: action.payload };
    default:
      return state;
  }
};
