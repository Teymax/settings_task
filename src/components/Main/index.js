import React from 'react';
import { Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap';

import { useOptions } from '../hooks/useOptions'

export const Main = () => {

  const { options } = useOptions();

  return (
    <>
      <hr/>
      <Row className="pt-2">
        <Col md={3}>
          <Form.Label className="mb-0">{options.main?.options[0].title}</Form.Label>
          <p className="text-secondary">{options.main?.options[0].description}</p>
        </Col>
        <Col md={6} className="mb-0">
          <Form.Select size="lg" className="text-secondary">
            {options.main?.options[0].value.map( item => <option key={item}>{item}</option>)}
          </Form.Select>
        </Col>
      </Row>

      <hr/>
      <Row className="pt-2">
        <Col md={3}>
          <Form.Label className="mb-0">{options.main?.options[1].title}</Form.Label>
          <p className="text-secondary">{options.main?.options[1].description}</p>
        </Col>
        <Col md={6} className="mb-0">
          <InputGroup size="lg" className="mb-3">
            <InputGroup.Text className="bg-white text-secondary">$</InputGroup.Text>
            <FormControl aria-label="Amount (to the nearest dollar)" className="border-left-0" />
          </InputGroup>
        </Col>
      </Row>

      <hr/>
      <Row className="pt-2">
        <Col xs={6} sm={3}>
          <Form.Label className="mb-0">{options.main?.options[2].title}</Form.Label>
          <p className="text-secondary">{options.main?.options[2].description}</p>
        </Col>
        <Col xs={6} className="mt-3">
          <Form.Check aria-label="option 1" />
        </Col>
      </Row>
    </>
  )
}
