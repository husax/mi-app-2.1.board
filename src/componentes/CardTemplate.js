//CardTemplates.js
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FuncionAGraficar from './FuncionAGraficar';  
//import Perpendiculares from './Perpendiculares';
import { FuncionContextProvider } from './FuncionContexto';
import Board from './Board';
import BoardContextProvider from '../contexts/BoardContext';
//import { useRef } from 'react';

function CardTemplate(){
  //const brd = useRef(null);
  //let func=useRef("a*x");
  return(
    <>
      <Row>
        <Col xs={12}>
        <FuncionContextProvider>
          <BoardContextProvider>
            <Card border="primary">
              <Card.Header>Bloque 1 </Card.Header>
              <Card.Body>
                  {/* <Col xs={6}> */}  
                <Card.Title>Funciones</Card.Title>
                  <Row>
                    <Col xs={6}>
                      <FuncionAGraficar/>
                    </Col>
                    <Col xs={6}>
                      <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      {/* <Perpendiculares/> */} 
                      </Card.Text>
                      <Board />
                    </Col>
                  </Row>
              </Card.Body>
            </Card>
          </BoardContextProvider>
        </FuncionContextProvider>
        </Col>
      </Row>
    </>
  );
}
export default CardTemplate;
