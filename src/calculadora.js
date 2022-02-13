import React, { useState } from 'react';
import './calculadora.css';
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Button,
  Form
} from 'react-bootstrap';


function Calculadora() {
  const [txtNumeros, setTxtNumeros] = useState("0")

  function formNumero(num) {
    setTxtNumeros(txtNumeros + num)
  }

  function Clear() {
    setTxtNumeros("0")
  }
  function Calcular(value) {
    console.log(value)
    setTxtNumeros("result")
  }
  return (
    <Jumbotron style={{
      background: 'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '5px',
      width: '400px',
    }}>
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger" onClick={() => Clear()}>C</Button>
          </Col>
          <Col xs="9">
            <Form.Control
              name="txtNumeros"
              type="text"
              className="text-right"
              roadOnly="roadonly"
              value={txtNumeros} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => formNumero(7)}>7</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => formNumero(8)}>8</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => formNumero(9)}>9</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => formNumero("/")}>/</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => formNumero(4)}>4</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => formNumero(5)}>5</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => formNumero(6)}>6</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => formNumero("*")}>*</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => formNumero(1)}>1</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => formNumero(2)}>2</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => formNumero(3)}>3</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => formNumero("-")}>-</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => formNumero(0)}>0</Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => formNumero(".")}>.</Button>
          </Col>
          <Col>
            <Button variant="success" onClick={(e) => Calcular(e.target.value)}>=</Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => formNumero("+")}>+</Button>
          </Col>
        </Row>
      </Container>

    </Jumbotron >
  );
}

export default Calculadora;
