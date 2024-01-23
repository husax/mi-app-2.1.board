import { useContext, useEffect,  } from 'react';
import { JSXGraph } from 'jsxgraph';
import { BoardContext } from '../contexts/BoardContext';

const Board = () => {
  const { brd, setBrd } = useContext(BoardContext);

  useEffect(() => {
    if (brd === null) {
      const board = JSXGraph.initBoard('jsxgraph-container', {
        boundingbox: [-5, 5, 5, -5],
        axis: true,
        pan: {
          needShiftToPan: true,
          enabled: true,
        }
      });
      setBrd(board);
    }

  });

  return <div id="jsxgraph-container" style={{ width: '100%', height: '400px' }}></div>;
};

export default Board;
