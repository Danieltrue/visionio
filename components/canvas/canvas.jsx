import { useRef } from "react";
import CanvasStyle from "./canvas.css";
import React from "react";

const Canvas = () => {
  const canvasRef = useRef(null);
  const [height, setHeight] = React.useState(0);
  const [width, setWidth] = React.useState(0);
  const [drawing, setDrawing] = React.useState(false);

  React.useEffect(() => {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
    canvasRef.current.width = width !== null ? width : 0;
    canvasRef.current.height = height !== null ? height : 0;
  }, []);

  // Adding this function to
  function startDrawing({ nativeEvent }) {
    const event = nativeEvent;
    //get context
    const ctx = canvasRef.current.getContext("2d");
    let x = event.offsetX,
      y = event.offsetY;
    draw(x, y, ctx);
  }

  function draw(x, y, ctx) {
    if (!drawing) return null;
    ctx.fillStyle = "#000000";
    ctx.lineTo(x, y);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 10;
    ctx.stroke();
  }

  return (
    <CanvasStyle
      ref={canvasRef}
      onMouseMove={startDrawing}
      onMouseDown={(e) => setDrawing(true)}
      onMouseUp={(e) => setDrawing(false)}
    ></CanvasStyle>
  );
};

export default Canvas;
