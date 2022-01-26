import React, { useState } from 'react';
import { Form, Row, Col, InputGroup } from 'react-bootstrap';
import Select from 'react-select';

import { useOptions } from '../hooks/useOptions';
import { useStates } from '../hooks/useStates';

import { Editor } from './Editor';

export const Options = ({keyTabs, index, iOpt}) => {
  const { options, fillOptions } = useOptions();
  const { fillState, state } = useStates();
  
  const [inputVal, setInputVal] = useState(state.cur);
  const [check, setCheck] = useState(state.time);

  const { 
    title,
    description,
    multiple,
    values,
    type
  } = options.options[keyTabs].options[index];

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

  const [activeIndex, setActiveIndex] = useState(values?.findIndex(item => item.value === 1));

  const showContext = (index) => {
    setActiveIndex(activeIndex === index ? null : index);

    if (!values[index].value) {
      values.map(item => item.value = false);
      values[index].value = true;
    } else {
      values.map(item => item.value = false);
    }

    fillOptions(options);
  };

  const handlerTitle = (index, event) => {
    values[index].title = event.target.value;
    state[values[index].options[0].name] = event.target.value
    fillState(state);
  };

  return (
    <>
      {keyTabs === 'main' && <hr/>}
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
                <Form.Control onChange={e => handleTitle(e)} value={inputVal}/>
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
        {
          type === "switch" &&
          <Col sm={9} className="mt-3 ">
            {
              values.map((item, index) => {
                return (
                  <div className="mb-3" key={index}>

                    <div className="d-flex justify-content-between">
                      <div className="form-check form-switch">
                        <input 
                          className="form-check-input" 
                          checked={item.value || ''}
                          onChange={() => showContext(index)} 
                          type="checkbox" 
                          id={index}
                        />
                        <label className="form-check-label" htmlFor={index}>{item.label}</label>
                      </div>
                      <label className="form-check-label text-primary" htmlFor={index}>Edit template</label>
                    </div>

                    <div className={activeIndex === index  ? "d-block" : "d-none"} >
                      <Col sm={9}>
                        <Form.Control 
                          size="lg" 
                          className="mt-3 mb-4" 
                          type="text" 
                          defaultValue={item.options[iOpt].value}
                          onChange={e => handlerTitle(index, e)}
                        />
                      </Col>
                      <Editor item={values[index].options[1]} index={index} />
                    </div>

                  </div>
                )
              })
            }
          </Col>
        }
      </Row>
    </>
  )
}
