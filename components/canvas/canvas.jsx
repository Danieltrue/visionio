import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { changePencilCap, changePencilSize } from "../../hook/pencil-tool.hook";

const Canvas = () => {
  const { activatePencil } = useSelector(
    (state) => state.rootReducer.featuresReducer
  );
  const { activatedEraser } = useSelector(
    (state) => state.rootReducer.featuresReducer
  );
  const { color } = useSelector(
    (state) => state.rootReducer.changeColorReducer
  );
  const { size } = useSelector(
    (state) => state.rootReducer.changePencilSizeReducer
  );
  const { linecap } = useSelector(
    (state) => state.rootReducer.changePencilCapReducer
  );

  const canvasRef = useRef(null);
  const [mouseDown, setMouseDown] = useState(false);
  /*this line of code is used to check if the canvas current is currently available to use*/
  const ctx =
    canvasRef.current !== null ? canvasRef.current.getContext("2d") : null;
  //
  useEffect(() => {
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
  }, []);

  // this effect change the pencil size
  useEffect(() => {
    ctx ? changePencilSize(ctx, size) : null;
  }, [size]);

  useEffect(() => {
    let ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = color ? color : "#000000";
  }, [color]);

  // this effect changes the pencil cap
  useEffect(() => {
    ctx ? changePencilCap(ctx, linecap) : null;
  }, [linecap]);

  // Please FIX ME SOON
  // Please FIX ME SOON
  // Please FIX ME SOON
  // Please FIX ME SOON
  // Please FIX ME SOON
  // Please FIX ME SOON
  // Please FIX ME SOON

  useEffect(() => {
    let ctx = canvasRef.current.getContext("2d");
    ctx && activatedEraser ? (ctx.strokeStyle = "#ff0000") : null;
  }, [activatedEraser]);
  // Please FIX ME SOON
  // Please FIX ME SOON
  // Please FIX ME SOON
  // Please FIX ME SOON
  // Please FIX ME SOON
  // Please FIX ME SOON
  function Draw({ nativeEvent }, ctx) {
    const { offsetX, offsetY } = nativeEvent;
    if (activatePencil && mouseDown) {
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
      return ctx;
    }
  }

  function moveDraw({ nativeEvent }, ctx) {
    /*this function is used to change the position of the pencil when you draw 
    another stroke on the canvasa*/
    const { offsetX, offsetY } = nativeEvent;
    ctx.moveTo(offsetX, offsetX);
    ctx.beginPath();
  }

  return (
    <canvas
      ref={canvasRef}
      onMouseMove={(e) => {
        /** this line is used to check if there is a context to draw on */
        ctx !== null ? Draw(e, ctx) : null;
      }}
      onMouseDown={(e) => {
        setMouseDown(true);
        /** this line is used to check if there is a context to draw on */
        ctx !== null ? moveDraw(e, ctx) : null;
      }}
      onMouseUp={(e) => setMouseDown(false)}
    ></canvas>
  );
};

export default Canvas;
