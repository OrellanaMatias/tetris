import { shrinkWrapShape } from './utils.js';

export function hasCollision({ activeShape, matrix, stageWidth, stageHeight }) {
  if (activeShape == null) {
    return false;
  }

  const shape = shrinkWrapShape(activeShape);
  const shapeLeft = shape.x;
  const shapeWidth = shape.matrix[0].length;
  const shapeRight = shapeLeft + shapeWidth;
  const shapeTop = shape.y;
  const shapeHeight = shape.matrix.length;
  const shapeBottom = shapeTop + shapeHeight;

  return (
    // izquierda
    shapeLeft < 0 ||
    // derecha
    shapeRight > stageWidth ||
    // abajo
    shapeBottom > stageHeight ||
    // otro coso
    shape.matrix.some((row, y) => {
      return row.some((cell, x) => {
        return cell && matrix[shapeTop + x]?.[shapeLeft + x];
      });
    })
  );
}
// exportar las funciones primero
export function isGameOver({ isGameOver }) {
  return isGameOver;
}

export function isTopOut({ activeShape }) {
  return shrinkWrapShape(activeShape).y < 0;
}

export function tickRate({ score }) {
  return Math.floor(0.25 * score) + 1.5;
}
