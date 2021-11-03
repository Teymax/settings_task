import React, { useState } from 'react';
import { Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Select from 'react-select';

import { useOptions } from '../hooks/useOptions'

export const Options = ({index}) => {
  const { fillOptions, options } = useOptions();
  const newOptions = {...options};
  const [inputVal, setInputVal] = useState(options.options.main.options[index].value);
  let isCheck = options.options.main.options[2]?.value;
  const [check, setCheck] = useState(isCheck);

  const handleTitle = (e) => {
    setInputVal(e.target.value);
    newOptions.options.main.options[index].value = inputVal;
    fillOptions(newOptions);
  }

  const handleSelect = (value) => {
    newOptions.options.main.options[index].value = value;
    fillOptions(newOptions);
  }

  const handleCheck = () => {
    setCheck(!check)
    newOptions.options.main.options[index].values[0].value = !check;
    fillOptions(newOptions);
  }

  return (
    <>
      <hr/>
      <Row className="pt-2">
        <Col md={3}>
          <Form.Label className="mb-0">{options.options.main.options[index].title}</Form.Label>
          <p className="text-secondary">{options.options.main.options[index].description}</p>
        </Col>

        {
          options.options.main.options[index].type === "select" &&
            <Col md={6} className="mb-0">
              <Select 
                isMulti={options.options.main.options[index].multiple} 
                options={options.options.main.options[index].values} 
                onChange={handleSelect}
                defaultValue={options.options.main.options[index].values[0]}
              />
            </Col>
        }
        {
           options.options.main.options[index].type === "text" &&
            <Col md={6} className="mb-0">
              <InputGroup size="lg" className="mb-3">
                <FormControl aria-label="Amount (to the nearest dollar)" onChange={e => handleTitle(e)} value={inputVal}/>
              </InputGroup>
            </Col>
        }
        {
           options.options.main.options[index].type === "checkbox" &&
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
