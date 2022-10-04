import React from 'react'

const useCanvas = (canvas) => {
    const [height, setHeight] = React.useState(0);
    const [width, setWidth] = React.useState(0);
    const [ctx, setCtx] = React.useState(null);
    // setup context
    React.useEffect(() => {
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
        canvas.current.width = width;
        canvas.current.height = height;
        setCtx(canvas.current.getContext("2d"))
    }, []);
    // return context
    return ctx;
}

const useDraw = ({ nativeEvent }, canvas, options) => {
    const ctx = canvas.current.getContext('2d');
    const { offsetX, offsetY } = nativeEvent;
    ctx.fillStyle = "#0099ee";
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();

    return [ctx,useDraw]
}

export { useCanvas, useDraw }