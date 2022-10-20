import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { changePencilCap, changePencilSize } from "../../hook/pencil-tool.hook";

const Canvas = () => {
  const { activatePencil } = useSelector(
    (state) => state.rootReducer.featuresReducer
  );
  const { activatedEraser } = useSelector(
    (state) => state.rootReducer.activateEraserReducer
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
  }, [size, ctx]);

  //this line of code help to change the pencil color
  useEffect(() => {
    let ctx = canvasRef.current.getContext("2d");
    ctx.strokeStyle = color ? color : "#000000";
  }, [color, activatePencil]);

  // this effect changes the pencil cap
  useEffect(() => {
    ctx ? changePencilCap(ctx, linecap) : null;
  }, [linecap, ctx]);

  function Draw({ nativeEvent }, ctx) {
    const { offsetX, offsetY } = nativeEvent;
    if (activatePencil && mouseDown) {
      ctx.lineTo(offsetX, offsetY);
      ctx.stroke();
      ctx.lineJoin = "round";
      return ctx;
    }
  }
  //
  function TouchDrawing(e, ctx) {
    const eXT = e.target.getBoundingClientRect();
    const { clientX, clientY } = e.nativeEvent.changedTouches[0];
    if (activatePencil) {
      ctx.lineTo(clientX - eXT.x, clientY - eXT.y);
      ctx.stroke();
      ctx.lineJoin = linecap;
      return ctx;
    }
  }
  //
  function TouchErasing(e, ctx) {
    const eXT = e.target.getBoundingClientRect();
    const { clientX, clientY } = e.nativeEvent.changedTouches[0];
    if (activatedEraser) {
      ctx.lineTo(clientX - eXT.x, clientY - eXT.y);
      ctx.strokeStyle = "#ffffff";
      ctx.stroke();
      ctx.lineJoin = linecap;
      return ctx;
    }
  }

  function Erase({ nativeEvent }, ctx) {
    const { offsetX, offsetY } = nativeEvent;
    if (activatedEraser && mouseDown) {
      ctx.lineTo(offsetX, offsetY);
      ctx.strokeStyle = "#ffffff";
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
        ctx !== null ? Erase(e, ctx) : null;
      }}
      onTouchMove={(e) => {
        ctx !== null ? TouchDrawing(e, ctx) : null;
        ctx !== null ? TouchErasing(e, ctx) : null;
      }}
      onTouchStart={(e) => {
        /** this line is used to check if there is a context to draw on */
        ctx !== null ? moveDraw(e, ctx) : null;
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
