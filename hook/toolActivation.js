import { startDrawing, activateEraser } from '../redux/action/features.action'

export function setActivatePencil(activatePencil,dispatch) {
    if(activatePencil){
        //set others to false
    } else { 
        dispatch(startDrawing(true))
        dispatch(activateEraser(false))
    }
}
export function setActivateEraser(activatedEraser,dispatch) {
    if(activatedEraser){
        //set others to false
    } else { 
        dispatch(activateEraser(true))
        dispatch(startDrawing(false))
    }
}
