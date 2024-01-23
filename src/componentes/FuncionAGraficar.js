//FuncionAGraficar.js
import React, { useContext, useEffect} from 'react';
import { FuncionContext } from './FuncionContexto';
import { BoardContext } from '../contexts/BoardContext';




  const FuncionAGraficar = () => {
    //const [selectedFunc, setSelectedFunc] = useContext(FuncionContext);
    const funcionContext = useContext(FuncionContext);
    const { selectedFunc, setSelectedFunc } = funcionContext;
    const { brd, ids, setIds } = useContext(BoardContext);
    
    // aqui esta lo que estaba en perpendiculares
    const GraficaSel= (cad) =>  {
      if (brd !== null) {
        while (ids.length> 0) {
          brd.removeObject(ids.pop(), false);          
        }
        const slider = brd.create('slider', [[0, 4], [3, 4], [-2, 4, 5]], {name:"a"});
        const selectedFunction = (x, a) => {
          const expr = cad.replace("a", `(${a})`);
          return Function("x", `return ${expr}`)(x);
        };

        const curve = brd.create('functiongraph', [
          x => selectedFunction(x, slider.Value())
        ]);

        const glider = brd.create('glider', [0.6, 1.2, curve]);

        const perpendicularToXAxis = brd.create('segment', [
          [()=> glider.X(), 0], [()=>glider.X(), ()=>glider.Y()]
        ], { straightFirst: false });

        const perpendicularToYAxis = brd.create('segment', [
          [0, ()=> glider.Y()], [()=> glider.X(), ()=>glider.Y()]
        ], { straightFirst: false });

        setIds( [slider.id, curve.id, perpendicularToXAxis.id, perpendicularToYAxis.id]);
        //console.log(brd);
      }
    };
    
    const handleFuncChange = (e) => {
      setSelectedFunc(e.target.value);
      // aqui actualiza al cambiar la función
      GraficaSel(e.target.value);
    };


    useEffect(() => {
      // sol para la primera vez que se renderiza
      if (ids.length === 0) {
        GraficaSel("a*x");        
      }
    })


    return (
      <div className="funcion-grafica">
        <h2>Selecciona una función:</h2>
        <select value={selectedFunc} onChange={handleFuncChange}>
          <option value="a*x">f(x) = ax</option>
          <option value="a*x**2">f(x) = ax^2</option>
          <option value="a*x**3">f(x) = ax^3</option>
          <option value="a*x**4">f(x) = ax^4</option>
        </select>

      </div>
    );
  };

export default FuncionAGraficar;


