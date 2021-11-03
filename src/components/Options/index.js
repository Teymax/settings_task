import React, { useState } from 'react';
import { Form, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import Select from 'react-select';

import { Editor } from './Editor'

import { useOptions } from '../hooks/useOptions'

export const Options = ({index, isMain}) => {
  const { fillOptions, options } = useOptions();
  const newOptions = {...options};
  const [inputVal, setInputVal] = useState(options.options.main.options[index].value);
  let isCheck = options.options.main.options[2]?.value;
  const [check, setCheck] = useState(isCheck);

  const handleTitle = (e) => {
    setInputVal(e.target.value);
    newOptions.options.main.options[index].value = e.target.value;
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

  const { 
    title,
    description,
    multiple,
    values,
    type
  } = options.options.main.options[index];

  const MainJSX =  <>
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
              defaultValue={values[0]}
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
const EmailJSX = ({iOpt}) => {
  const { fillOptions, options } = useOptions();
  const [activeIndex, setActiveIndex] = useState(null);
  const newOptions = {...options};

  const showContext = (index) => {
    setActiveIndex(activeIndex === index ? null : index);

    if (!newOptions.options.email.options[iOpt].values[index].checked) {
      newOptions.options.email.options[iOpt].values.map(item => item.checked = false);
      newOptions.options.email.options[iOpt].values[index].checked = true;
    } else {
      newOptions.options.email.options[iOpt].values.map(item => item.checked = false);
    }

    fillOptions(newOptions);
  };

  const handlerTitle = (index, event) => {
    newOptions.options.email.options[iOpt].values[index].title = event.target.value;
    fillOptions(newOptions);
  };

  const {
    title,
    description,
    values
  } = options.options.email?.options[iOpt];

  return (
    <Row className="pt-2 justify-content-end">
      <Col sm={3}>
        <Form.Label className="mb-0">{title}</Form.Label>
        <p className="text-secondary">{description}</p>
      </Col>

      <Col sm={9} className="mt-3 ">
      {
        values.map((item, index) => {
          return (
            <div className="mb-3" key={index}>
              <div className="d-flex justify-content-between">
                <div className="form-check form-switch">
                  <input 
                    className="form-check-input" 
                    checked={item.checked || ''} 
                    onChange={() => showContext(index)} 
                    type="checkbox" 
                    id={index}
                  />
                  <label className="form-check-label" htmlFor={index}>{item.label}</label>
                </div>
                <label className="form-check-label text-primary" htmlFor={index}>Edit template</label>
              </div>

              <div className={activeIndex === index ? "d-block" : "d-none"} >
                <Col sm={9}>
                  <Form.Control 
                    size="lg" 
                    className="mt-3 mb-4" 
                    type="text" 
                    defaultValue={item.options[iOpt].value}
                    onChange={e => handlerTitle(index, e)}
                  />
                </Col>
                <Editor item={item} index={index}/>
              </div>
            </div>
          )
        })
      }
      </Col>
    </Row>
  )
}
  return ( isMain ? MainJSX : EmailJSX
  )
}


