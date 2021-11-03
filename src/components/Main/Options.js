import React, { useState } from 'react';
import { Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Select from 'react-select';

import { useOptions } from '../hooks/useOptions';
import { useStates } from '../hooks/useStates';

export const Options = ({index}) => {
  const { options } = useOptions();
  const { fillState, state } = useStates();

  const [inputVal, setInputVal] = useState(state.cur);
  const [check, setCheck] = useState(state.time);

  const handleSelect = (values) => {
    const selectedValues = [];
    values.filter(role => selectedValues.push(role.value))
    state.role = selectedValues;
    fillState(state);
  }

  const handleTitle = (e) => {
    setInputVal(e.target.value);
    state.cur = e.target.value;
    fillState(state);
  }

  const handleCheck = () => {
    setCheck(!check)
    state.time = !check;
    fillState(state);
  }

  const { 
    title,
    description,
    multiple,
    values,
    type
  } = options.options.main.options[index];

  return (
    <>
      <hr/>
      <Row className="pt-2">
        <Col md={3}>
          <Form.Label className="mb-0">{title}</Form.Label>
          <p className="text-secondary">{description}</p>
        </Col>

        {
          type === "select" &&
            <Col md={6} className="mb-0">
              <Select 
                isMulti={multiple} 
                options={values} 
                onChange={handleSelect}
                defaultValue={state.role}
              />
            </Col>
        }
        {
          type === "text" &&
            <Col md={6} className="mb-0">
              <InputGroup size="lg" className="mb-3">
                <FormControl onChange={e => handleTitle(e)} value={inputVal}/>
              </InputGroup>
            </Col>
        }
        {
          type === "checkbox" &&
            <Col xs={6} className="mt-3">
              <Form.Check 
                defaultChecked={check} 
                onChange={handleCheck} 
              />
            </Col>
        }
      </Row>
    </>
  )
}
