import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

const Canvas = () => {
  const { activatePencil } = useSelector(
    (state) => state.rootReducer.featuresReducer
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

  function Draw({ nativeEvent }, ctx) {
    const { offsetX, offsetY } = nativeEvent;
    if (activatePencil && mouseDown) {
      ctx.fillStyle = "#ff0000";
      ctx.lineTo(offsetX, offsetY);
      ctx.strokeStyle = "#000";
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
