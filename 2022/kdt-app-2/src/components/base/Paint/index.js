import { useCallback, useEffect, useRef, useState } from "react";
import { PenPlugin } from "./plugins/pen";

const calculateCoor = (e, canvas) => {
  const rect = canvas.getBoundingClientRect();

  return {
    x: e.pageX - rect.left - window.scrollX,
    y: e.pageY - rect.top - window.scrollY
  };
};

const Paint = ({
  command ='pen',
  color = '#000000',
  lineWidth = 2,
  width = 800,
  height = 600,
  plugins = [new PenPlugin()],
  style,
  className
}) => {
  const [currentCommand, setCurrentCommand] = useState(command);
  const [currentLineWidth, setCurrentLineWidth] = useState(lineWidth);
  const [currentColor, setCurrentColor] = useState(color);
  const [currentPlugins, setCurrentPlugins] = useState({});
  const [drawing, setDrawing] = useState(0);
  const canvasRef = useRef(null);

  const scale = typeof window === 'undefined' ? 1 : window.devicePixelRatio;

  const canvasDefaultStyle = {
    useSelect: 'none',
    WebkitUserSelect: 'none'
  };

  const canvasSizeStyle = {
    width,
    height
  }

  useEffect(() => {
    if (!canvasRef.current) return;

    canvasRef.current.width = width * scale;
    canvasRef.current.height = height * scale;
    
    canvasRef.current.getContext('2d').scale(scale, scale);


    plugins.forEach(plugin => {
      plugin.canvas = canvasRef.current;
    });

    setCurrentPlugins(
      Object.assign(
        {},
        ...plugins.map((plugin) => ({
          [plugin.name]: plugin,
        }))
      )
    )
  }, [canvasRef.current, scale]);

  const handleDrawStart = useCallback((e) => {
    e.preventDefault();

    const { x, y } = calculateCoor(e, canvasRef.current);

    currentPlugins[currentCommand].draw({
      x,
      y,
      width,
      height,
      scale,
      lineWidth: currentLineWidth,
      color: currentColor,
      state: 'draw-started'
    });

    setDrawing(true);
  }, [canvasRef, currentCommand, currentLineWidth, currentColor, currentPlugins]);
  const handleDrawing =useCallback((e) => {
    e.preventDefault();
    if (!drawing) return;

    const { x, y } = calculateCoor(e, canvasRef.current);

    currentPlugins[currentCommand].draw({
      x,
      y,
      width,
      height,
      scale,
      lineWidth: currentLineWidth,
      color: currentColor,
      state: 'drawing'
    });
  }, [canvasRef, currentCommand, currentLineWidth, currentColor, currentPlugins, drawing]);
  const handleDrawFinish =useCallback((e) => {
    e.preventDefault();
    if (!drawing) return;

    const { x, y } = calculateCoor(e, canvasRef.current);

    currentPlugins[currentCommand].draw({
      x,
      y,
      width,
      height,
      scale,
      lineWidth: currentLineWidth,
      color: currentColor,
      state: 'draw-finished'
    });

    setDrawing(false);
  }, [canvasRef, currentCommand, currentLineWidth, currentColor, currentPlugins, drawing]);

  return (
    <canvas 
      ref={canvasRef}
      onMouseDown={handleDrawStart}
      onMouseMove={handleDrawing}
      onMouseUp={handleDrawFinish}
      style={{ ...canvasDefaultStyle, ...canvasSizeStyle, ...style }} 
      className={className}
    />
  );
};

export default Paint;